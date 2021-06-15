import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Recycle from './RecycleScreen';
import Reuse from './ReuseScreen';


const Tab = createMaterialTopTabNavigator();

function ActivityScreen({ navigation }) {
  return(
    <Tab.Navigator>
        <Tab.Screen name="Recycle" component={Recycle} />
        <Tab.Screen name="Reuse" component={Reuse} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function ActivityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Activities" component={ActivityScreen} />
    </Stack.Navigator>
  );
}
