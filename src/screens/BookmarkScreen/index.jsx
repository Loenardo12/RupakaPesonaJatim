import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const dummyBookmarks = [
  {
    id: '1',
    title: 'Tari Reog Ponorogo',
    image:
      'https://nusantara-news.co/wp-content/uploads/2023/09/64b3b11f7c6cc009671238.jpeg',
    category: 'Seni Tari',
  },
  {
    id: '2',
    title: 'Gamelan Jawa Timur',
    image: 'https://source.unsplash.com/featured/?gamelan,java',
    category: 'Musik Tradisional',
  },
];

const BookmarkScreen = () => {
  const [bookmarks, setBookmarks] = useState(dummyBookmarks);

  const removeBookmark = id => {
    setBookmarks(bookmarks.filter(item => item.id !== id));
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => removeBookmark(item.id)}
          style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Favorit Saya</Text>
      {bookmarks.length === 0 ? (
        <Text style={styles.emptyText}>Belum ada kesenian yang disimpan.</Text>
      ) : (
        <FlatList
          data={bookmarks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    padding: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A52A2A',
    fontFamily: 'PlayfairDisplay-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#4A3228',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 12,
    color: '#4CAF50',
    fontFamily: 'Poppins-SemiBold',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#4A3228',
  },
  removeButton: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#FF8C00',
    borderRadius: 20,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});

export default BookmarkScreen;
