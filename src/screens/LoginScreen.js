import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

// todo: add in app icon

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.background}> 
      <Card>
        <Card.Title title= "Log In"/>
        <Card.Content>
          <TextInput 
          style= {styles.input}
          placeholder= "Username"
          />
          <TextInput 
          style= {styles.input}
          placeholder= "Password"
          />
        </Card.Content>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Login"
        />
    </Card>
    <View style= {styles.optionsBG}>
      <TouchableOpacity
        onPress={() => console.log("someone forgot their pw")}
        style= {styles.options}>
          <Text> Forgot Password? </Text>
      </TouchableOpacity>
      <Text> . </Text>
      <TouchableOpacity
          onPress={() => console.log("register new user!")}
          style= {styles.options}> 
            <Text> Sign Up </Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: "center"
  },
  input:{
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  optionsBG:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10
  },
  options:{
    color: "black"
  }
});

export default LoginScreen;

