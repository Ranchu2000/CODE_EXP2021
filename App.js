import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen'
import LoginScreen from './src/screens/LoginScreen';
import ResourceScreen from './src/screens/ResourceScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import Recycle from './src/screens/Activity/RecycleScreen';
import Reuse from './src/screens/Activity/ReuseScreen';
import ActivityScreen from './src/screens/Activity/ActivityScreen'

import {Feather} from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//login as the default page
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
          } else if (route.name === 'Resource') {
            iconName = 'grid';
          } else if (route.name === 'Activity') {
            iconName = 'plus-circle';
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5DBB63',
        inactiveTintColor: '#9897A9',
      }}
    ><Tab.Screen
          name= "Home"
          component={HomeScreen}
          options={{title: 'Home'}}
      />
    <Tab.Screen
          name= "Resource"
          component={ResourceScreen}
          options={{title: 'Articles'}}
    />

    <Tab.Screen
          name= "Activity"
          component={ActivityScreen}
          options={{title: 'Activity'}}
      />
    
    <Tab.Screen
          name= "Profile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
      />


    </Tab.Navigator>
    </NavigationContainer>
  )
}
  
export default ()=>{
  return <App />
};