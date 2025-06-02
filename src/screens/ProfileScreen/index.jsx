import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Setting2, Edit} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';


const ProfileScreen = () => {
  const scheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate('AddBlog')}>
      <Edit color={colors.white()} variant="Linear" size={20} />

      <View style={styles.container}>
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    paddingTop: 40,
  },
  floatingButton: {
    backgroundColor: '#8DD8FF',
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: '#8DD8FF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  headerBackground: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 180,
    backgroundColor: '#EFD9B4',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: -1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFF8DC',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A52A2A',
    marginBottom: 6,
  },
  role: {
    fontSize: 15,
    color: '#4A3228',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A52A2A',
  },
  statLabel: {
    fontSize: 14,
    color: '#4A3228',
  },
  section: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#FFF8DC',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A3228',
    marginBottom: 12,
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3B8',
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#4A3228',
  },
});

export default ProfileScreen;
