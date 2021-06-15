import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {List} from "react-native-paper"
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 

function AppointmentsScreen({ navigation }) {    
    return (
      <SafeAreaView style={styles.container}>
        <List.Item
          title="Collection of Plastic Waste"
          description="30/6/21, 12:00pm"
          left={props => 
          <View style={styles.icons}>
            <FontAwesome5 name="prescription-bottle" size={24} color="black" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="black" />
            </View>
          }
        />

        <List.Item
          title="Collection of Old Electronics"
          description="30/6/21, 12:00pm"
          left={props => 
          <View style={styles.icons}>
            <Feather name="hard-drive" size={24} color="black" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="black" />
            </View>
          }
        />

        <List.Item
          title="Collection (General)"
          description="7/7/21, 8.00am"
          left={props => 
          <View style={styles.icons}>
            <FontAwesome5 name="recycle" size={24} color="black" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="black" />
            </View>
          }
        />
      </SafeAreaView>
    );
  }

  const Stack = createStackNavigator();

  export default function SettingsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
      </Stack.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    title: {
      fontSize: 20,
    },
    icons: {
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
    },
    
  
  });