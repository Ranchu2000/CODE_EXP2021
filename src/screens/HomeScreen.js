import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import {Feather, FontAwesome5} from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import Modal from 'react-native-modal';

//todo: profile picture + add friends pop up icon

const  {height, width}= Dimensions.get("window");
const HomeScreen = ({ navigation }) => {
  const [isVisible, setVisible]= useState(false);
  const toggleModel= ()=>{
    setVisible(!isVisible);
  };
  const [pressed, setPressed]= useState();
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
      style= {styles.popup}
      // transparent= {true}
      onBackdropPress={()=>
      {
        setVisible(false)
        setPressed(false)
      }
        }
      visible= {isVisible}
      >
        <Card>
          <Card.Title title= "Add friends!"/>
          <Card.Content>
          <View style= {styles.searchbar}>
            <Feather name="search" size= {24} color= "black" />
            <TextInput 
              style= {styles.input}
              placeholder= "Search Username or Phone number:"
              onEndEditing= {()=>setPressed (!pressed)}
            />
          </View>
            {pressed? 
                    <Card>
                      <Card.Content>
                        <Text> Username: Jian Rong</Text>
                        <Text> Email: rongrong@gmail.com</Text>
                        <Button title= "Confirm" />
                      </Card.Content>
                    </Card>
            : null}
          </Card.Content>
        </Card>
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
  },
  popup:{
    flex: 1,
    width: width * 0.9,
  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 10,
    width: width * 0.65,
    

  },
  searchbar:{
    flexDirection: 'row',
    marginBottom: 10
    
  }
});

export default HomeScreen;