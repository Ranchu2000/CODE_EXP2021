import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}> 
      <Text style={styles.text}>Hi there!</Text>
      <TextInput 
      style= {styles.input}
      />
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Login"
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

