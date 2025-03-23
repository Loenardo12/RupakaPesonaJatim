/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, Pressable} from 'react-native';
import {Element3, Receipt21, Clock, Message, SearchNormal} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rupaka Pesona Jatim</Text>
        <Element3 color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={searchBar.container}>
        <TextInput style={searchBar.input} placeholder="Cari disini" />
        <Pressable style={searchBar.button}>
          <SearchNormal size={20} color={colors.white()} />
        </Pressable>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Seni Tari
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Musik Tradisional</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>kerajinan</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>wayang & Sastra</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Kuliner Tradisional</Text>
          </View>
          
        </ScrollView>
      </View>
      <ListBlog />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '700',
    alignContent: 'center',
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25, // Sudut lebih melengkung
    alignItems: 'center',
    backgroundColor: '#FFD700',
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: '#2C2C2C',
  },
});
const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderColor: colors.grey(0.2),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://nusantara-news.co/wp-content/uploads/2023/09/64b3b11f7c6cc009671238.jpeg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Reog Ponorogo</Text>
                  <Text style={itemHorizontal.cardText}>Semi Tari</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Traditional_indonesian_instruments02.jpg/640px-Traditional_indonesian_instruments02.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Gamelan</Text>
                  <Text style={itemHorizontal.cardText}>Musik Tradisional</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/736x/ce/21/12/ce211258781437c72aea467270963523.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Batik</Text>
                  <Text style={itemHorizontal.cardText}>Kerajinan</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://student-activity.binus.ac.id/bslc/wp-content/uploads/sites/49/2021/12/Picture1.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Wayang</Text>
                  <Text style={itemHorizontal.cardText}>Wayang</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem,marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cnc-magazine.oramiland.com/parenting/images/Makanan_khas_Jawa_Timur_Rawon.width-500.format-webp.webp',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Rawon</Text>
                  <Text style={itemHorizontal.cardText}>
                    Kuliner Tradisional
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
              </ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://asset.kompas.com/crops/KOblroSeD5UDhVb9IlvBs1-fF4A=/11x0:881x580/750x500/data/photo/2021/09/07/61375373e7531.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Seni Tari</Text>
                  <Text style={itemVertical.cardTitle}>Tari Remo</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jawa Timur</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://bobobox.com/blog/wp-content//uploads/2024/09/angklung-jpg.webp',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>
                    Musik Tradisional
                  </Text>
                  <Text style={itemVertical.cardTitle}>Angklung</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jawa Timur</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://eksotikaindonesia.com/wp-content/uploads/2020/02/topeng-malanangan-seni-tradisi-dari-malang-jawa-timur.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Kerajinan</Text>
                  <Text style={itemVertical.cardTitle}>Topeng Malangan</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jawa Timur</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://www.situsjatim.com/webmin/images/posts/1/2024/2024-09-01/5cfff25f837602656d772f63a68d48f2_1.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Wayang & Sastra</Text>
                  <Text style={itemVertical.cardTitle}>Ludruk</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jawa Timur</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://www.masakapahariini.com/wp-content/uploads/2022/08/makanan-khas-jawa-timur-lontong-kupang-500x300.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Kuliner Tradisional </Text>
                  <Text style={itemVertical.cardTitle}>
                    Kupang
                  </Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>Jawa Timur</Text>
                <Message size={10} variant="Linear" color={colors.grey(0.6)} />
                <Text style={itemVertical.cardText}>89</Text>
              </View>
            </View>
          </View>
                  </View>
      </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.grey(0.3),
    flexDirection: 'row',
    borderRadius: 15,
    padding: 10, // Tambahkan padding agar isi tidak terlalu mepet
    overflow: 'hidden',
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});


