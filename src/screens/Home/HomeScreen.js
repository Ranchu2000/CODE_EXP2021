import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import {Feather, FontAwesome5, Ionicons} from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import Modal from 'react-native-modal';
import { createStackNavigator } from "@react-navigation/stack";
import ActivityScreen from '../Activity/ActivityScreen';
import CatalogueScreen from './CatalogueScreen';
import FriendsScreen from './FriendsScreen';

//todo: profile picture + add friends pop up icon

const  {height, width}= Dimensions.get("window");

function HomeScreen ({ navigation }) {
  const [isVisible, setVisible]= useState(false);
  const [pressed, setPressed]= useState(false);
  return (
    <View style= {styles.screen}> 
      <View style={styles.header}>
        <Card onPress={() => {
            navigation.navigate("Activities");
        }}>
          <Card.Title title= "Add New Activity" style= {styles.headerText}/>
        </Card>
      </View>
        
      {/* <Modal 
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
      </Modal> */}
    
      <ScrollView>
      <Card style= {styles.card}>
        <Card.Title title= "Recycling Activity By Yu Fei"/>
        <View style= {styles.postprofile}>
          <Card.Content>
            <Text> 14th June 2021 0900hrs </Text>
            <Text> Recycled 5kg of Paper</Text>
            <Text> 2 Reward Points Earned!</Text>
          </Card.Content>
          <Ionicons name= "person-circle-sharp" style= {styles.friendprofile} />
        </View>
        
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

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        headerRight: () => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("Catalogue");
        }}>
            <View style={styles.icons}>
              <Feather name="shopping-cart" size={24} color="black" />
            </View>
          </TouchableOpacity>
        ),
        
        headerRight: () => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("Friends");
        }}>
            <View style={styles.friendicon}>
              <FontAwesome5 name="user-friends" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )
      
      }} 
        />
        <Stack.Screen options={{headerShown: false}} name="Activities" component={ActivityScreen} />
        <Stack.Screen name="Catalogue" component={CatalogueScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  screen:{
    marginBottom: 80
  },
  header:{
    marginBottom: 5,
  },
  headerText:{
    marginLeft: width * 0.25
  },
  postprofile:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  friendprofile:{
    fontSize: 44,
    color: 'black',
    marginRight: 30,
    marginBottom: 10
  },
  friendicon:{
    marginRight: 100,
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
  },
  icons: {
    marginRight: 20,
  },

});
