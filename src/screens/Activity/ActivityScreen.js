import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recycle from './RecycleScreen';
import Reuse from './ReuseScreen';
import { Avatar, Card, List, Title, Paragraph } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export default function ActivityScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recycle" component={Recycle} />
      <Tab.Screen name="Reuse" component={Reuse} />
    </Tab.Navigator>
  );
}