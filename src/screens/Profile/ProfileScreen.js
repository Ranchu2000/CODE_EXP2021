import React from 'react';
import { Component, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Button, Card, List, Title, Paragraph } from 'react-native-paper';
import RecyclingHistoryScreen from './RecyclingHistoryScreen';
import TransactionsScreen from './TransactionsScreen';
import AppointmentsScreen from './AppointmentsScreen';
import { Feather } from '@expo/vector-icons'; 
import SettingsScreen from "../Settings/SettingsScreen"

function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#EAE6EB' }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        <Card style={styles.card}>
        <View style={styles.profile}>
        <Card.Cover 
          source={{ uri: 'https://i.pinimg.com/originals/d4/8f/b5/d48fb554485e9adfcae86fe6a57efc30.jpg' }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60
          }}
          />
           </View>
          <Card.Title
            title= "Germaine Lee"
            style={{alignItems: "center", fontFamily: "Helvetica"}}
            subtitle="joined on 1/1/21"
            />
          
        </Card>
        
        <Card style={styles.card} onPress={() => {
            navigation.navigate("Appointments");}}>
          <Card.Title
            title= "My Appointments"
            style={styles.header}/>
            
          <Card.Cover source={{ uri: 
            "https://www.apptoto.com/wp-content/uploads/2017/06/calendar-appointment-confirmed.jpg" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View all appointments</Text>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card} onPress={() => {
            navigation.navigate("Recycling History");
        }}>
          <Card.Title 
          title= "Total Trash Recycled: 50kg"
          style={styles.header}/>
          <Card.Cover source={{ uri: 
            "https://www.kindpng.com/picc/m/117-1170347_transparent-line-graph-clipart-chart-icon-png-png.png" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View Recycling History</Text>
          </Card.Actions>
        </Card>

        <Card style={styles.card} onPress={() => {
            navigation.navigate("Transactions");
        }}>
          <Card.Title 
          title= "Total Coins: 3000"
          style={styles.header}/>
          <Card.Cover source={{ uri: 
            "https://cdn2.vectorstock.com/i/1000x1000/79/76/pink-piggy-bank-with-falling-golden-coins-saving-vector-19647976.jpg" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View Transactions History</Text>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
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
        ),
        headerStyle: {
          backgroundColor: '#5DBB63',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      />
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: '#5DBB63',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      name="Recycling History" 
      component={RecyclingHistoryScreen}/>
      <Stack.Screen options={{headerShown: false,}} name="Transactions" component={TransactionsScreen}/>
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
    backgroundColor: '#EAE6EB',
    marginHorizontal: 20,
  },

  card: {
    marginVertical: 10,
    fontFamily: 'Helvetica',
    // justifyContent: 'space-around',
  },
 
  header: {
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  buttonText: {
    fontSize: 12, 
    color: "#5DBB63",
    fontFamily: 'Helvetica'
  },
  icons: {
    marginHorizontal: 20,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profile: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    
  }
});