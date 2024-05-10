import { StyleSheet, Text, View, Image } from 'react-native';


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.profileImageContainer}>
        <Image 
          source={{uri: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`}}
          style={styles.profileImage} // Adjust dimensions and styles as needed
        />
      </View>
      <View style={styles.bioContainer}>
        <Text>Bio</Text>
      </View>
      <View style={styles.socialContainer}>
        <Text>Socials</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bioContainer: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 100,
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '20%'
  },
  socialContainer: {
    backgroundColor: '#ccc',

    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '10%'
  },
  profileImageContainer: {
    height: 200,
    width: 200,
    backgroundColor: '#ccc',
    borderRadius: 100,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: "10%"
  },
  profileImage: {
    height: 190,
    width: 190,
    borderRadius: 100
  },  
});
