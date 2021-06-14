import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ResourceScreen from './src/screens/ResourceScreen';
import {Feather} from '@expo/vector-icons';


const Stack= createStackNavigator();
const App= function(props){
  return<NavigationContainer>
  {/* ensures the exported function is a react component */}
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions= {{gestureEnabled: false}}
    >
      <Stack.Screen
          name= "Login"
          component={LoginScreen}
          options={{title: 'Log In'}}
      />
      <Stack.Screen
          name= "Home"
          component={HomeScreen}
          options={{title: 'Home'}}
      />
      <Stack.Screen
          name= "Resource"
          component={ResourceScreen}
          options={{title: 'Waste Articles'}}
      />
    </Stack.Navigator>
    </NavigationContainer>;
}
  
export default ()=>{
  return <App />
};