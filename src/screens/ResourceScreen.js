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
            <Text style={styles.text}>Latest News!</Text>
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
                  <Text style={styles.articleText}>People living and working in the City-Punggol sector can look forward to smarter and more sustainable services for public waste collection and recycling under a new contract awarded to SembWaste.
                  Among them is a new fleet of refuse collection trucks that includes 14 electric vehicles, making up almost 20...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "More than 300 e-waste recycling bins to be deployed from July"/> 
            <Card.Cover source= {require('../Images/recyclingbin.jpg')} />
            <Card.Content>
                  <Text style={styles.articleText}>More than 300 electrical and electronic waste (e-waste) recycling bins will be deployed across Singapore in public areas from Jul 1, said the National Environment Agency (NEA).The move is part of NEA’s e-waste Extended Producer Responsibility (EPR) scheme, which began with a soft launch on Friday...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "37 projects to receive $3.7 million under SG Eco Fund"/> 
            <Card.Cover source= {require('../Images/ecofund.jpg')} />
            <Card.Content>
                  <Text style={styles.articleText}>A total of 37 green projects will receive $3.7 million in grants under the SG Eco Fund set up to aid sustainability efforts, Minister for Sustainability and the Environment Grace Fu announced on Saturday (May 22).Of these, 25 projects will receive up to $50,000 in funding, while the remaining 12 will...</Text>
            </Card.Content>
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Singapore's recycling rate falls to 10-year low"/> 
            <Card.Cover source= {require('../Images/recyclingrates.jpg')} />
            <Card.Content>
                  <Text style={styles.articleText}>For a developed country, Singapore's domestic recycling rate was already low, at 17 per cent. Covid has been blamed for pushing down recycling rates further, although less waste was generated last year compared to 2019.The city-state’s overall recycling rate in 2020 was 52 per cent, down from 59 per...</Text>
            </Card.Content>
      </Card>
      
    </ScrollView>

    <View style= {styles.header}> 
      <Text style={styles.text}>Conservation Tips!</Text>
      <Foundation name= "lightbulb" style= {styles.icons} />
    </View>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
       <Card style= {styles.post}>
            <Card.Title title= "How to Recycle Different Materials"/> 
            <Card.Cover source= {require('../Images/recycle101.jpg')} />
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Recycling Tips"/> 
            <Card.Cover source= {require('../Images/recycleplastic.jpeg')} />
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Reduce Water Wastage"/> 
            <Card.Cover source= {require('../Images/reduce-water.jpg')} />
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Reduce Food Wastage"/> 
            <Card.Cover source= {require('../Images/reduce-food.jpg')} />
      </Card>

    </ScrollView>
    
    <View style= {styles.header}>
      <Text style={styles.text}>Contribute!</Text>
      <FontAwesome5 name= "first-aid" style= {styles.icons} />
    </View>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
      <Card style= {styles.post}>
            <Card.Title title= "Singapore Environment Council"/> 
            <Card.Cover source= {require('../Images/SEC.png')} />
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "The Ocean Cleanup"/> 
            <Card.Cover source= {require('../Images/ocean-cleanup.png')} />
      </Card>
      <Card style= {styles.post}>
            <Card.Title title= "Zero Waste SG"/> 
            <Card.Cover source= {require('../Images/zero-waste.png')} />
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
            headerStyle: {backgroundColor: '#5DBB63'},
            headerTintColor: 'black',
            headerTitleStyle: {fontWeight: 'bold'},
          }} 
            />
            <Stack.Screen 
            options={{
                  headerStyle: {backgroundColor: '#5DBB63'},
                  headerTintColor: 'black',
                  headerTitleStyle: {fontWeight: 'bold'},
                }} 
            name="Article" 
            component={ArticleScreen} />
        </Stack.Navigator>
      );
    }

const styles = StyleSheet.create({
  text: {
      fontSize: 30,
      marginLeft: 25,
      marginTop: 15,
      marginBottom: 15,
      fontFamily: "Helvetica"
  },
  icons:{
      fontSize: 30,
      color: 'black',
      marginLeft: 10
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 10,
  },
  post:{
      width: width * 0.9,
      marginLeft: 20,
      // marginBottom: 20,
      // justifyContent: 'space-around',
  },
  background: {
      flexDirection: 'row'
  },
  articleText: {
        textAlign: 'justify', 
        margin: 20,
        fontFamily: "Helvetica",
        lineHeight: 18
  }
  
});


