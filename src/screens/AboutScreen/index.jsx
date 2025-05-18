import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: 'https://source.unsplash.com/featured/?indonesia,heritage',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Tentang Rupaka Pesona Jatim</Text>
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
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A52A2A',
    marginBottom: 10,
    fontFamily: 'PlayfairDisplay-Bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    color: '#4A3228',
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4A3228',
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
  },
});

export default AboutScreen;
