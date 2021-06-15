import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {List} from "react-native-paper"
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 

function AppointmentsScreen({ navigation }) {    
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#EAE6EB' }]}>
      <ScrollView>
      <List.Section>
      <List.Subheader>Upcoming Appointments</List.Subheader>
        <List.Item
          title="Collection of Plastic Waste"
          description="30/6/21, 12:00pm"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 12, marginRight: 13}}>
            <FontAwesome5 name="prescription-bottle" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Collection of Old Electronics"
          description="30/6/21, 12:00pm"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <Feather name="hard-drive" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Collection (General)"
          description="7/7/21, 8.00am"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 11, marginRight: 11}}>
            <FontAwesome5 name="recycle" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />
        </List.Section>
          
        <List.Section>
      <List.Subheader>Past Appointments</List.Subheader>
        <List.Item
          title="Collection (General)"
          description="collected on 1/3/21"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 11, marginRight: 11}}>
            <FontAwesome5 name="recycle" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Collection of Old Electronics"
          description="collected on 1/3/21"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <Feather name="hard-drive" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Collection (General)"
          description="collected on 14/2/21"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 11, marginRight: 11}}>
            <FontAwesome5 name="recycle" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />
        <List.Item
          title="Collection of Plastic Waste"
          description="collected on 23/1/21"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 12, marginRight: 13}}>
            <FontAwesome5 name="prescription-bottle" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />

        </List.Section>
      </ScrollView>
      </SafeAreaView>
    );
  }

  const Stack = createStackNavigator();

  export default function SettingsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: '#5DBB63',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
        },
      }}
        name="Appointments" 
        component={AppointmentsScreen} />
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

  