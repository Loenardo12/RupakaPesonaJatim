import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Selamat Datang di Rupaka Pesona Jatim',
    description:
      'Jelajahi keindahan budaya dan seni dari berbagai penjuru Jawa Timur.',
    image: 'https://source.unsplash.com/featured/?indonesia,culture',
  },
  {
    id: '2',
    title: 'Kenali Kesenian Lokal',
    description:
      'Temukan beragam kesenian seperti tari, musik, wayang, dan kriya tradisional.',
    image: 'https://source.unsplash.com/featured/?reog,indonesia',
  },
  {
    id: '3',
    title: 'Ikuti Festival Budaya',
    description:
      'Jangan lewatkan acara budaya dan festival menarik di daerahmu.',
    image: 'https://source.unsplash.com/featured/?indonesia,festival',
  },
];

const Onboarding = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({item}) => (
    <View style={[styles.slide, {width}]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}>
        <Text style={styles.buttonText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A52A2A',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay-Bold',
  },
  description: {
    fontSize: 16,
    color: '#4A3228',
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: {
    color: '#4A3228',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Onboarding;
