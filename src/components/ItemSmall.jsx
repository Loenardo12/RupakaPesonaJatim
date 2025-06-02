import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';



const ItemSmall = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Receipt21 color={colors.grey(0.6)} variant="Linear" size={24} />
        </View>
        <View style={styles.cardInfo}>
          <Clock size={14} variant="Linear" color={colors.grey(0.6)} />
          <Text style={styles.cardText}>{item.placeofOrigin}</Text>
          <Message size={14} variant="Linear" color={colors.grey(0.6)} />
          <Text style={styles.cardText}>{item.totalComments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSmall;

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 20,
  },
  cardItem: {
    backgroundColor: colors.grey(0.2),
    flexDirection: 'row',
    borderRadius: 20, // Membuat sudut lebih bulat
    padding: 14,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 4,
  
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 12,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 20, // Membuat sudut gambar lebih bulat
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: 14,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  cardTextContainer: {
    flex: 1,
    gap: 6,
  },
});
