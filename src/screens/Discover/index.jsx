import {StyleSheet, Text, View, ScrollView, FlatList,ActivityIndicator, TouchableOpacity} from 'react-native';
import {BlogList} from '../../data';
import {ItemSmall} from '../../components';
import {SearchNormal1} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';

import {Edit, Setting2} from 'iconsax-react-native';
import React, {useState, useCallback} from 'react';
import FastImage from '@d11/react-native-fast-image';
import {ProfileData} from '../../data';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {formatNumber} from '../../utils/formatNumber';
import axios from 'axios';

const data = [
  {id: 1, label: 'react'},
  {id: 2, label: 'wwdc'},
  {id: 3, label: 'best sneaker'},
  {id: 4, label: 'setup pc'},
  {id: 5, label: 'car'},
];
const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const FlatListRecent = () => {
  const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const Discover = () => {
  const navigation = useNavigation();
  
  // status untuk menandakan apakah terjadi loading/tidak
  const [loading, setLoading] = useState(true);
  // state blod data untuk menyimpan list (array) dari blog
  const [blogData, setBlogData] = useState([]);
  // status untuk menyimpan status refreshing
  const [refreshing, setRefreshing] = useState(false);
  
  const getDataBlog = async () => {
    try {
      // ambil data dari API dengan metode GET
      const response = await axios.get(
        'https://6819c9221ac1155635065a8e.mockapi.io/api/blog',
      );
      // atur state blogData sesuai dengan data yang
      // di dapatkan dari API
      setBlogData(response.data);
      // atur loading menjadi false
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
      </View>
      <View>
        <Text style={recent.text}>Recent Search</Text>
        <FlatListRecent />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingVertical: 10, gap: 10}}>
          {/* Tampilkan Blog Data */}
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <ItemSmall item={item} key={index} />)
          )}
        </View>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('AddBlog')}>
          <Edit color={colors.white()} variant="Linear" size={20} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Discover;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.grey(0.15),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.65),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
});
