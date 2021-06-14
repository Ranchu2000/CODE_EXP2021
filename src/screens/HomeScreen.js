import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}> 
      <Text style={styles.text}>Hi there!</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

