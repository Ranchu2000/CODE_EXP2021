import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import {FontAwesome, FontAwesome5, Foundation} from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import ArticleScreen from './ArticleScreen';
// import images into each text and fill legit infomation to each text
// icons for contributions
const  {height, width}= Dimensions.get("window");
function ResourceScreen ({ navigation }) {
      
  return (
    <View> 
      <ScrollView>
      <View style= {styles.header}> 
            <Text style={styles.text}>Latest News!</Text>
            <FontAwesome name= "newspaper-o" size= {44} color= "black" />
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
      <Card style= {styles.post}>
            <Card.Title title= "Lorem ipsum dolor sit amet"/> 
            <Card.Content>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque rhoncus urna. Ut ut neque vestibulum mi porttitor mattis. Phasellus molestie varius est, sit amet iaculis quam tincidunt ut. Nunc blandit orci sit amet venenatis scelerisque. Sed odio turpis, blandit rutrum felis sed, fringilla pulvinar nisl. Donec porttitor viverra erat...</Text>
            </Card.Content>
      </Card>
      
    </ScrollView>

    <View style= {styles.header}> 
      <Text style={styles.text}>Recycling Tips!</Text>
      <Foundation name= "lightbulb" size= {44} color= "black" />
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
      <Text style={styles.text}>Contribute!</Text>
      <FontAwesome5 name= "first-aid" size= {44} color= "black" />
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
  header: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 10
  },
  post:{
      width: width * 3/4,
      marginLeft: 10
  },
  background: {
      flexDirection: 'row'
  }
});


