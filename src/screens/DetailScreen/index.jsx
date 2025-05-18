import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  const {item} = route.params; // item: { title, image, category, description }

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  category: {
    fontSize: 14,
    color: '#4CAF50',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#A52A2A',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#4A3228',
    lineHeight: 24,
    textAlign: 'justify',
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#FFD700',
    alignSelf: 'center',
    borderRadius: 30,
  },
  backButtonText: {
    color: '#4A3228',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default DetailScreen;
