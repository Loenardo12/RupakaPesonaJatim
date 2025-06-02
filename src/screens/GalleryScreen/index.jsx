import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const galleryData = [
  {
    id: '1',
    image: 'https://source.unsplash.com/featured/?batik,indonesia',
    title: 'Motif Batik Madura',
  },
  {
    id: '2',
    image: 'https://source.unsplash.com/featured/?wayang,jawa',
    title: 'Wayang Kulit Khas Jatim',
  },
  {
    id: '3',
    image: 'https://source.unsplash.com/featured/?tari,jawa',
    title: 'Tari Remo Surabaya',
  },
  {
    id: '4',
    image: 'https://source.unsplash.com/featured/?keris,jawa',
    title: 'Keris Tradisional',
  },
  {
    id: '5',
    image: 'https://source.unsplash.com/featured/?gamelan,jawa',
    title: 'Gamelan Jawa Timur',
  },
];

const GalleryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.caption}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeri Budaya</Text>
      <FlatList
        data={galleryData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#A52A2A',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    gap: 10,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  image: {
    width: (width - 60) / 2,
    height: 160,
    resizeMode: 'cover',
  },
  caption: {
    fontSize: 14,
    padding: 8,
    color: '#4A3228',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default GalleryScreen;