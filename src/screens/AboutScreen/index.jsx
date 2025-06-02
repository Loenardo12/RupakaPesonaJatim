import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerBackground} />

      {/* Tombol Kembali */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#4A3228" />
      </TouchableOpacity>

      <Image
        source={{
          uri: 'https://source.unsplash.com/featured/?indonesia,heritage',
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Tentang Rupaka Pesona Jatim</Text>

      <View style={styles.divider} />

      <Text style={styles.text}>
        Rupaka Pesona Jatim adalah aplikasi mobile yang didedikasikan untuk
        memperkenalkan dan melestarikan kekayaan budaya dan seni dari Jawa
        Timur. Aplikasi ini menyajikan informasi menarik seputar seni tari,
        musik tradisional, kerajinan tangan, wayang, sastra, dan kuliner khas
        dari berbagai daerah di Jawa Timur.
      </Text>

      <Text style={styles.text}>
        Kami percaya bahwa dengan mengenal lebih dalam budaya lokal, kita bisa
        menumbuhkan rasa cinta dan bangga terhadap warisan leluhur. Melalui
        aplikasi ini, pengguna dapat menjelajahi beragam konten budaya, melihat
        peta budaya interaktif, mengikuti event dan festival, serta menyimpan
        kesenian favorit mereka.
      </Text>

      <Text style={styles.subtitle}>Pengembang</Text>
      <Text style={styles.text}>
        Aplikasi ini dikembangkan oleh tim kreatif yang memiliki kepedulian
        terhadap pelestarian budaya Nusantara, dengan harapan dapat menjadi
        media edukatif dan inspiratif bagi generasi muda.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5DC',
    position: 'relative',
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#EFD9B4',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: '#FFF8DC',
    padding: 8,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 40,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A52A2A',
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay-Bold',
    textAlign: 'center',
  },
  divider: {
    width: 80,
    height: 3,
    backgroundColor: '#A52A2A',
    alignSelf: 'center',
    borderRadius: 2,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 8,
    color: '#4A3228',
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4A3228',
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
    marginBottom: 12,
  },
});

export default AboutScreen;
