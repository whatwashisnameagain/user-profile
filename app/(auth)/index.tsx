import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router'


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.brandImageContainer}>
        <Text>7th</Text>
      </View>
      <View style={styles.loginInputContainer}>
        <Text>Sign in w/ Google [ Later ]</Text>
      </View>
      <View style={styles.loginInputContainer}>
        <Text>Sign in w/ Apple [ Later ]</Text>
      </View>
      <View style={styles.loginInputContainer}>
        <Text>Sign in w/ Phone</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/(home)">
          <Text>Get Started</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginInputContainer: {
    backgroundColor: "#ccc",
    width: '100%',
    height: 50,
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '20%'
  },
  buttonContainer: {
    backgroundColor: "#ccc",
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '10%'
  },
  brandImageContainer: {
    height: 200,
    width: 200,
    backgroundColor: "#ccc",
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
