import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {List} from "react-native-paper"
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 

function RewardsScreen ({ navigation }) {    
    return (
      <SafeAreaView style={styles.container}>
        <List.Item
          title="Recycled 10kg of Plastic"
          description="10 coins earned on 1/8/21"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 12, marginRight: 13}}>
            <FontAwesome5 name="prescription-bottle" size={24} color="black" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Recycled Electronics"
          description="10 coins earned on 1/8/21"
          left={props => 
            <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
              <Feather name="hard-drive" size={24} color="black" />
            </View>
          }
          right={props =>
            <View style={styles.icons}>
              <FontAwesome5 name="chevron-right" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Brought a reusable cup"
          description="5 coins earned on 1/8/21"
          left={props => 
            <View style={{marginTop: 10, marginLeft: 11, marginRight: 11}}>
              <Feather name="coffee" size={24} color="black" />
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

  const Stack = createStackNavigator();

  export default function RewardsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Rewards" component={RewardsScreen} />
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

    image: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },    
  
  });