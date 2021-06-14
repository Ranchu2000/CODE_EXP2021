import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Button, Card, List, Title, Paragraph } from 'react-native-paper';
import RecycleScreen from './RecycleScreen';
import RewardsScreen from './RewardsScreen';
import AppointmentsScreen from './AppointmentsScreen';
import { Feather } from '@expo/vector-icons'; 
import SettingsScreen from "../Settings/SettingsScreen"

function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Welcome, John!</Text>
        
        <Card style={styles.card} onPress={() => {
            navigation.navigate("Appointments");
        }}>
          <Card.Title/>
          <Card.Content>
            <Title>My Appointments: </Title>
          </Card.Content>
          <Card.Cover source={{ uri: 
            "https://www.apptoto.com/wp-content/uploads/2017/06/calendar-appointment-confirmed.jpg" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View all appointments</Text>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card} onPress={() => {
            navigation.navigate("Recycling");
        }}>
          <Card.Title/>
          <Card.Content>
            <Title>Total Trash Recycled: </Title>
            <Text style={styles.accentedText}>50kg</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 
            "https://www.kindpng.com/picc/m/117-1170347_transparent-line-graph-clipart-chart-icon-png-png.png" }} />
          <Card.Actions>
            <Text style={styles.buttonText}>View Recycling History</Text>
          </Card.Actions>
        </Card>

        <Card style={styles.card} onPress={() => {
            navigation.navigate("Rewards");
        }}>
          <Card.Title/>
          <Card.Content>
            <Title>Total Earned: </Title>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>$13.56</Text>
          </Card.Content>
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
      <Stack.Screen name="Recycling" component={RecycleScreen} />
      <Stack.Screen name="Rewards" component={RewardsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Appointments" component={AppointmentsScreen} />
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
    flex: 1,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
 
  header: {
    fontSize: 30,
    fontWeight: "bold"
  },
  accentedText: {
    fontSize: 30, 
    fontWeight: "bold"
  },
  buttonText: {
    fontSize: 16, 
    color: "maroon",
  },
  icons: {
    marginHorizontal: 20,
  },

});