import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./DetailsScreen"
import {List} from "react-native-paper"
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 


function SettingsScreen({ navigation }) {    
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#EAE6EB' }]}>
      <List.Item
        title="Notifications"
        description="Mute/Manage notifications"
        left={props => 
        <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <FontAwesome5 name="bell" size={24} color="#5DBB63" />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
          </View>
        }
      />

      <List.Item
        title="Security"
        description="Username and password settings"
        left={props => 
        <View style={{marginTop: 10, marginLeft: 9, marginRight: 10}}>
          <Feather name="lock" size={24} color="#5DBB63" />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
          </View>
        }
      />

      <List.Item
        title="Account"
        description="Name, email, phone number, address"
        left={props => 
        <View style={{marginTop: 10, marginLeft: 11, marginRight: 10}}>
          <FontAwesome5 name="user" size={24} color="#5DBB63" />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
          </View>
        }
      />

      <List.Item
        title="Help"
        description="Feedback and FAQs"
        left={props => 
        <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <Feather name="help-circle" size={24} color="#5DBB63" />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
          </View>
        }
      />

      <List.Item
        title="About"
        description="Learn more about us"
        left={props => 
        <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <Feather name="info" size={24} color="#5DBB63" />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 16,
    color: "#fff",
  },
  icons: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}