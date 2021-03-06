import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import {Feather, FontAwesome5, Ionicons, FontAwesome, AntDesign, Entypo} from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import Modal from 'react-native-modal';
import { createStackNavigator } from "@react-navigation/stack";
import ActivityScreen from '../Activity/ActivityScreen';
import CatalogueScreen from './CatalogueScreen';
import FriendsScreen from './FriendsScreen';

//todo: profile picture + add friends pop up icon

const {height, width}= Dimensions.get("window");

function HomeScreen ({ navigation }) {
  const [isVisible, setVisible]= useState(false);
  const [pressed, setPressed]= useState(false);
  return (
    <View style= {[styles.screen, { backgroundColor: '#EAE6EB' }]}> 
      <View style={styles.header}>
        <Card onPress={() => {
            navigation.navigate("Activities");
        }}>
          <Card.Title title= "Add New Activity" style= {styles.headerText}/>
        </Card>
      </View>
      <ScrollView>
      <Card style= {styles.card}>
        <Card.Title 
          title= "Recycling Activity- Yu Fei"
          right={(props) =><Ionicons name= "person-circle-sharp" style= {styles.friendprofile} />}
          subtitle= "14/06/2021 09:00am"/>
        <Card.Content style= {styles.postText}>
          <Text>Recycled 5kg of Paper</Text>
          <Text>Earned 2 Points</Text>
        </Card.Content>
        <View style= {styles.functionicons}>
        <TouchableOpacity>
        <AntDesign name= "like2" style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name= 'comments-o' style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name= 'share-alternative' style= {styles.functionicon}/>
        </TouchableOpacity>
       </View>
      </Card>

      <Card style= {styles.card}>
        <Card.Title 
          title= "Reusing Activity- Jian Rong"
          right={(props) =><Ionicons name= "person-circle-sharp" style= {styles.friendprofile} />}
          subtitle= "13/06/2021 07:00pm"/>
        <Card.Content style= {styles.postText}>
          <Text>Saved 2 straws and 2 bags @ LiHo, AMK</Text>
          <Text>Earned 0.5 Points</Text>
        </Card.Content>
        <View style= {styles.functionicons}>
        <TouchableOpacity>
        <AntDesign name= "like2" style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name= 'comments-o' style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name= 'share-alternative' style= {styles.functionicon}/>
        </TouchableOpacity>
       </View>
      </Card>

      <Card style= {styles.card}>
        <Card.Title 
          title= "Recycling Activity- Germaine"
          right={(props) =><Ionicons name= "person-circle-sharp" style= {styles.friendprofile} />}
          subtitle= "12/06/2021 11:00am"/>
        <Card.Content style= {styles.postText}>
          <Text>Recycled 2kg of Electronics</Text>
          <Text>Earned 10 Points</Text>
        </Card.Content>
        <View style= {styles.functionicons}>
        <TouchableOpacity>
        <AntDesign name= "like2" style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name= 'comments-o' style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name= 'share-alternative' style= {styles.functionicon}/>
        </TouchableOpacity>
       </View>
      </Card>
      
      <Card style= {styles.card}>
        <Card.Title 
          title= "Reusing Activity- Joy"
          right={(props) =><Ionicons name= "person-circle-sharp" style= {styles.friendprofile} />}
          subtitle= "11/06/2021 03:00pm"/>
        <Card.Content style= {styles.postText}>
          <Text>Saved 3 bags @ NTUC, Bishan</Text>
          <Text>Earned 0.3 Points</Text>
        </Card.Content>
        <View style= {styles.functionicons}>
        <TouchableOpacity>
        <AntDesign name= "like2" style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name= 'comments-o' style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name= 'share-alternative' style= {styles.functionicon}/>
        </TouchableOpacity>
       </View>
      </Card>

      <Card style= {styles.card}>
        <Card.Title 
          title= "Reusing Activity- Hubert"
          right={(props) =><Ionicons name= "person-circle-sharp" style= {styles.friendprofile} />}
          subtitle= "11/06/2021 06:00pm"/>
        <Card.Content style= {styles.postText}>
          <Text>Saved 4 Containers and 4 Utensils @ Roasted123, Toa Payoh</Text>
          <Text>Earned 1 Points</Text>
        </Card.Content>
        <View style= {styles.functionicons}>
        <TouchableOpacity>
        <AntDesign name= "like2" style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name= 'comments-o' style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name= 'share-alternative' style= {styles.functionicon}/>
        </TouchableOpacity>
       </View>
      </Card>
    
      <Card style= {styles.card}>
        <Card.Title 
          title= "Recycling Activity- Yue Ran"
          right={(props) =><Ionicons name= "person-circle-sharp" style= {styles.friendprofile} />}
          subtitle= "10/06/2021 10:00am"/>
        <Card.Content style= {styles.postText}>
          <Text>Recycled 3kg of Paper</Text>
          <Text>Earned 2 Points</Text>
        </Card.Content>
        <View style= {styles.functionicons}>
        <TouchableOpacity>
        <AntDesign name= "like2" style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name= 'comments-o' style= {styles.functionicon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name= 'share-alternative' style= {styles.functionicon}/>
        </TouchableOpacity>
       </View>
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
        headerStyle: {backgroundColor: '#5DBB63'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        title: "RecycleSG",
        headerTitleStyle: {fontFamily: "Verdana", fontWeight: "bold"},

        headerRight: () => (
          <View style= {styles.topBarRight} >
            <TouchableOpacity onPress={() => {
            navigation.navigate("Catalogue");
        }}>
            <View style={styles.icons}>
              <Feather name="shopping-cart" size={30} color="black" />
            </View>
            </TouchableOpacity>
            </View>
            ),
        headerLeft: ()=> (
          <View style= {styles.topBarLeft} >
            <TouchableOpacity onPress={() => {
              navigation.navigate("Friends");
              }}>
              <View style={styles.friendicon}>
                <FontAwesome5 name="user-friends" size={30} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        )
      }} 
        />
        <Stack.Screen options={{headerShown: false}} name="Activities" component={ActivityScreen} />
        <Stack.Screen options={{headerShown: false}} name="Catalogue" component={CatalogueScreen} />
        <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: '#5DBB63',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Friends" 
        component={FriendsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  topBarLeft:{
    marginLeft: 35,
    marginBottom: 10
  },
  topBarRight:{
    marginRight: 20,
    marginBottom: 10
  },
  screen:{
    marginBottom: 55
  },
  header:{
    marginBottom: 5,
  },
  headerText:{
    marginLeft: width * 0.25
  },
  postText:{
    marginBottom: 10
  },
  friendprofile:{
    fontSize: 55,
    color: 'black',
    marginRight: 30,
    marginTop: 20
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
  functionicon:{
    fontSize: 24,
    color: 'black', 
    marginTop: 8
  },
  functionicons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderTopWidth: 1
  }



});
