import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}> 
      <Text style={styles.text}>Log In Here!</Text>
      <TextInput 
      style= {styles.input}
      placeholder= "Username"
      />
      <TextInput 
      style= {styles.input}
      placeholder= "Password"
      />
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Login"
      />
      <Button
        onPress={() => console.log("register new user!")}
        title="Sign Up"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  input:{
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
}
});

export default LoginScreen;

