import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TouchableOpacity, Modal } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import { Card } from 'react-native-paper';
// import Modal from 'react-native-modal';

// like function? 
//todo: profile picture + add friends pop up icon
const HomeScreen = ({ navigation }) => {
  const [isVisible, setVisible]= useState(false);
  const toggleModel= ()=>{
    setVisible(!isVisible);
  };
  return (
    <View> 
      <View style= {styles.header}>
        <Text style={styles.text}>Lets Trash it!</Text>
        <TouchableOpacity 
        style= {styles.friendicon}
        onPress= {toggleModel}>
          <FontAwesome5 name= "user-friends" size={24} color= "black" />
        </TouchableOpacity>
      </View>
      <Modal 
      transparent= {true}
      visible= {isVisible}>
        <Text> add friends! </Text>
      </Modal>
    
      <ScrollView>
      <Card style= {styles.card}>
        <Card.Title title= "Recycling Activity By Yu Fei"/>
        <Card.Content>
          <Text> 14th June 2021 0900hrs </Text>
          <Text> Recycled 5kg of Paper</Text>
          <Text> 2 Reward Points Earned!</Text>
        </Card.Content>
      </Card>
      <Card style= {styles.card}>
        <Card.Title title= " Reducing Activity By Jian Rong:"/>
        <Card.Content>
            <Text> 13th June 2021 0900hrs </Text>
            <Text> Brought my own cup to Starbux</Text>
            <Text> 0.2 Reward Points Earned!</Text>
        </Card.Content>
      </Card>
      <Card style= {styles.card}>
        <Card.Title title= "Recycling Activity By Yu Fei"/>
        <Card.Content>
          <Text> 14th June 2021 0900hrs </Text>
          <Text> Recycled 5kg of Paper</Text>
          <Text> 2 Reward Points Earned!</Text>
        </Card.Content>
      </Card>
      <Card style= {styles.card}>
        <Card.Title title= " Reducing Activity By Jian Rong:"/>
        <Card.Content>
            <Text> 13th June 2021 0900hrs </Text>
            <Text> Brought my own cup to Starbux</Text>
            <Text> 0.2 Reward Points Earned!</Text>
        </Card.Content>
      </Card>
      <Card style= {styles.card}>
        <Card.Title title= "Recycling Activity By Yu Fei"/>
        <Card.Content>
          <Text> 14th June 2021 0900hrs </Text>
          <Text> Recycled 5kg of Paper</Text>
          <Text> 2 Reward Points Earned!</Text>
        </Card.Content>
      </Card>
      <Card style= {styles.card}>
        <Card.Title title= " Reducing Activity By Jian Rong:"/>
        <Card.Content>
            <Text> 13th June 2021 0900hrs </Text>
            <Text> Brought my own cup to Starbux</Text>
            <Text> 0.2 Reward Points Earned!</Text>
        </Card.Content>
      </Card>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  friendicon:{
    marginRight: 10,
    marginTop: 5
  },
  text: {
    fontSize: 30
  },
  card:{
    marginBottom: 5
  }
});

export default HomeScreen;