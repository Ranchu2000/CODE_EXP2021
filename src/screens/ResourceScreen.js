import React, {useState} from 'react';
import { StatusBar, Text, StyleSheet, View, Button, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import {FontAwesome, FontAwesome5, Foundation} from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import ArticleScreen from './ArticleScreen';
// import images into each text and fill legit infomation to each text
// icons for contributions
const  {height, width}= Dimensions.get("window");
function ResourceScreen ({ navigation }) {
      
  return (
    <View style= {[styles.container, { backgroundColor: '#EAE6EB' }]}> 

      <ScrollView>
      <View style= {styles.header}> 
            <Text style={styles.text}>Latest News!   </Text>
            <FontAwesome name= "newspaper-o" style= {styles.icons} />
      </View>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
      <Card 
            style= {styles.post}
            onPress={() => {
                  navigation.navigate("Article");}}
                  >
            <Card.Title title= "Recycling Efforts at Punggol Sector"/> 
            <Card.Cover source= {require('../Images/punggol1.jpg')} />
            <Card.Content>
                  <Text>People living and working in the City-Punggol sector can look forward to smarter and more sustainable services for public waste collection and recycling under a new contract awarded to SembWaste.
                  Among them is a new fleet of refuse collection trucks that includes 14 electric vehicles, making up almost 20...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "More than 300 e-waste recycling bins to be deployed from July"/> 
            <Card.Cover source= {require('../Images/recyclingbin.jpg')} />
            <Card.Content>
                  <Text>More than 300 electrical and electronic waste (e-waste) recycling bins will be deployed across Singapore in public areas from Jul 1, said the National Environment Agency (NEA).The move is part of NEA’s e-waste Extended Producer Responsibility (EPR) scheme, which began with a soft launch on Friday...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>
      
    </ScrollView>

    <View style= {styles.header}> 
      <Text style={styles.text}>Recycling Tips!</Text>
      <Foundation name= "lightbulb" style= {styles.icons} />
    </View>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>

    </ScrollView>
    
    <View style= {styles.header}>
      <Text style={styles.text}>Contribute!    </Text>
      <FontAwesome5 name= "first-aid" style= {styles.icons} />
    </View>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
      <Card style= {styles.post}>
            <Card.Title title= "Recycling Right at Punggol West"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>

    </ScrollView>
    </ScrollView>
    </View>
  );
};

const Stack = createStackNavigator();

export default function ResourceStack({ navigation }) {
      return (
        <Stack.Navigator>
          <Stack.Screen 
          name="Resource" 
          component={ResourceScreen} 
          options={{
          }} 
            />
            <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
      );
    }

const styles = StyleSheet.create({
  text: {
      fontSize: 30,
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 15,
  },
  icons:{
      fontSize: 44,
      color: 'black',
      marginLeft: 20
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 10
  },
  post:{
      width: width * 0.9,
      marginLeft: 10
  },
  background: {
      flexDirection: 'row'
  }
});


