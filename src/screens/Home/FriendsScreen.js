import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput, Button} from 'react-native';
import {Feather, FontAwesome5, Ionicons, FontAwesome, AntDesign, Entypo} from '@expo/vector-icons';
import { Card } from 'react-native-paper';


export default function FriendsScreen() {
  const [pressed, setPressed]= useState(false);
    return(
    <ScrollView>
        <View style= {styles.backgroundStyle}>
        <Feather style= {styles.iconStyle} name="search"/>
        <TextInput
            style= {styles.inputStyle}
            placeholder= "search"
            onEndEditing={()=> setPressed(true)} 
            />
      </View>
      <View> 
      {pressed? 
        <View> 
          <Card>
            <Card.Title 
              title= "Damian"
              left={(props) => <Ionicons name= "person-circle-sharp" style= {styles.friendprofile}/>}
              right={(props) => <Button title= "Add" onPress={()=> setPressed(false)}/>}
              subtitle= "Email Address: damian123@gmail.com"/>
          </Card>
        </View>
      : null}
      </View>
      
    </ScrollView>
    
    );
}
const styles= StyleSheet.create({
    backgroundStyle:{
      backgroundColor: '#F0EEEE',
      marginTop: 10,
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row', //so that icon and text is a horizontal line
      marginBottom: 10
  },
  inputStyle:{
        borderColor:'black',
        flex: 1, // occupy the remainder space as it is the only child
        fontSize: 18
  },
  postprofile:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center', // center itself 
    marginHorizontal: 15
  },
  friendprofile:{
    fontSize: 44,
    color: 'black',
  },
}); 