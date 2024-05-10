import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import { Link } from 'expo-router'

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go { isEnabled ? "Offline" : "Online"}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={styles.buttonContainer}>
        <Link href="/(auth)">
          <Text>Logout</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ccc",
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '10%'
  },
});

export default SettingsScreen;