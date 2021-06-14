import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ResourceScreen from './src/screens/ResourceScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import Activity1Screen from './src/screens/Activity1Screen';
import Activity2Screen from './src/screens/Activity2Screen';

import {Feather} from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App= function(props){
  return (
  <NavigationContainer>
  {/* ensures the exported function is a react component */}
    
    <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          //Set the icon based on which route it is (name of the tab)
          if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Waste Articles') {
            iconName = 'trash-2';
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    ><Tab.Screen
          name= "Home"
          component={HomeScreen}
          options={{title: 'Home'}}
      />
    <Tab.Screen
          name= "Resource"
          component={ResourceScreen}
          options={{title: 'Waste Articles'}}
    />

    <Tab.Screen
          name= "Profile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
      />

    <Tab.Screen
          name= "Activity1"
          component={Activity1Screen}
          options={{title: 'Activity'}}
     />
    <Tab.Screen
          name= "Activity2"
          component={Activity2Screen}
          options={{title: 'Activity'}}
      />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
  
export default ()=>{
  return <App />
};