import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Button, Card, List, Title, Paragraph } from 'react-native-paper';
import RecyclingHistoryScreen from './RecyclingHistoryScreen';
import RewardsScreen from './RewardsScreen';
import AppointmentsScreen from './AppointmentsScreen';
import { Feather } from '@expo/vector-icons'; 
import SettingsScreen from "../Settings/SettingsScreen"

function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Welcome, John!</Text>
        
        <Card style={styles.card} onPress={() => {
            navigation.navigate("Appointments");}}>
          <Card.Title
            title= "My Appointments: "/>
          <Card.Cover source={{ uri: 
            "https://www.apptoto.com/wp-content/uploads/2017/06/calendar-appointment-confirmed.jpg" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View all appointments</Text>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card} onPress={() => {
            navigation.navigate("Recycling History");
        }}>
          <Card.Title title= "Total Trash Recycled: 50kg"/>
          <Card.Cover source={{ uri: 
            "https://www.kindpng.com/picc/m/117-1170347_transparent-line-graph-clipart-chart-icon-png-png.png" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View Recycling History</Text>
          </Card.Actions>
        </Card>

        <Card style={styles.card} onPress={() => {
            navigation.navigate("Rewards");
        }}>
          <Card.Title title= "Total Coins: 3000"/>
          <Card.Cover source={{ uri: 
            "https://cdn2.vectorstock.com/i/1000x1000/79/76/pink-piggy-bank-with-falling-golden-coins-saving-vector-19647976.jpg" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View Rewards History</Text>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
        headerRight: () => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("Settings");
        }}>
            <View style={styles.icons}>
              <Feather name="settings" size={24} color="black" />
            </View>
            
          </TouchableOpacity>
        )}} 
      />
      <Stack.Screen name="Recycling History" component={RecyclingHistoryScreen} />
      <Stack.Screen options={{headerShown: false}} name="Rewards" component={RewardsScreen} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
      <Stack.Screen options={{headerShown: false}} name="Appointments" component={AppointmentsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollView: {
    backgroundColor: '#eee',
    marginHorizontal: 20,
  },

  card: {
    marginBottom: 20,
    justifyContent: 'space-around',
  },
 
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16, 
    color: "maroon",
  },
  icons: {
    marginHorizontal: 20,
  },

});