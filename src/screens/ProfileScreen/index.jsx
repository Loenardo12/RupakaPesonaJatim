import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Setting2, Edit} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerBackground} />

        <Image
          source={{
            uri: 'https://source.unsplash.com/featured/?javanese,person',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.role}>Pecinta Budaya Jawa Timur</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Bookmark</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pengaturan</Text>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
              <Icon name="person-outline" size={20} color="#4A3228" />
              <Text style={styles.menuText}>Ubah Profil</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
              <Icon name="language-outline" size={20} color="#4A3228" />
              <Text style={styles.menuText}>Bahasa & Tema</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
              <Icon
                name="information-circle-outline"
                size={20}
                color="#4A3228"
              />
              <Text style={styles.menuText}>Tentang Aplikasi</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
              <Icon name="log-out-outline" size={20} color="#4A3228" />
              <Text style={styles.menuText}>Keluar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBlog')}>
        <Edit color="#FFFFFF" variant="Linear" size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingTop: 40,
    alignItems: 'center',
    paddingBottom: 100, // agar tidak tertutup tombol
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 180,
    backgroundColor: '#FFD8A9',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: -1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#E0E0E0',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#8B0000',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#FFF',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  statLabel: {
    fontSize: 13,
    color: '#666',
    letterSpacing: 0.5,
  },
  section: {
    width: '90%',
    marginTop: 16,
    backgroundColor: '#FFF7E6',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4A3228',
    marginBottom: 10,
  },
  menuItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0D6C2',
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  menuText: {
    fontSize: 15,
    color: '#4A3228',
  },
  floatingButton: {
    backgroundColor: '#007AFF',
    padding: 14,
    position: 'absolute',
    bottom: 24,
    right: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});

export default ProfileScreen;
