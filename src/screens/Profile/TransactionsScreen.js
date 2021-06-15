import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {List} from "react-native-paper"
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 

function TransactionsScreen ({ navigation }) {    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <List.Item
        title="Total Coins:"
        titleStyle= {{fontWeight: "bold", fontSize: 20}}
        description=""
        left={props => 
        <View style={{justifyContent: "center", marginLeft: 23, marginRight: 23}}>
          <FontAwesome5 name="wallet" size={24} color="#5DBB63" />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>3000</Text>
            <FontAwesome5 name="coins" size={24} color="#5DBB63" />
          </View>
        }
      />
      <List.Section>
        <List.Subheader>June 2021</List.Subheader>
        <List.Item
          title="Recycled Plastic"
          description="on 12/6/21"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 12, marginRight: 13}}>
            <FontAwesome5 name="prescription-bottle" size={24} color="#5DBB63" />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <Text>+30</Text>
              <FontAwesome5 name="coins" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Redeemed 'Free Pearl Milk Tea'"
          description="on 6/6/21"
          left={props => 
          <View style={{marginTop: 10, marginLeft: 6, marginRight: 8}}>
            <Image style={styles.image} source={{ uri: 
            'https://www.passioncard.gov.sg/images/default-source/images-pac/passion-merchants/liho-logo-500x500.png?sfvrsn=5a502eaf_0'}} />
          </View>
          }
          right={props =>
            <View style={styles.icons}>
              <Text>-200</Text>
              <FontAwesome5 name="coins" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Recycled Electronics"
          description="on 1/6/21"
          left={props => 
            <View style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>
              <Feather name="hard-drive" size={24} color="#5DBB63" />
            </View>
          }
          right={props =>
            <View style={styles.icons}>
              <Text>+30</Text>
              <FontAwesome5 name="coins" size={18} color="#5DBB63" />
            </View>
          }
        />

        <List.Item
          title="Brought a reusable cup"
          description="1/6/21"
          left={props => 
            <View style={{marginTop: 10, marginLeft: 11, marginRight: 11}}>
              <Feather name="coffee" size={24} color="#5DBB63" />
            </View>
          }
          right={props =>
            <View style={styles.icons}>
              <Text>+5</Text>
              <FontAwesome5 name="coins" size={18} color="#5DBB63" />
            </View>
          }
        />
        </List.Section>

        <List.Section>
        <List.Subheader>May 2021</List.Subheader>
        <List.Item
          title="Brought a reusable cup"
          description="28/5/21"
          left={props => 
            <View style={{marginTop: 10, marginLeft: 11, marginRight: 11}}>
              <Feather name="coffee" size={24} color="#5DBB63" />
            </View>
          }
          right={props =>
            <View style={styles.icons}>
              <Text>+5</Text>
              <FontAwesome5 name="coins" size={18} color="#5DBB63" />
            </View>
          }
        />
        <List.Item
          title="Brought a reusable cup"
          description="14/5/21"
          left={props => 
            <View style={{marginTop: 10, marginLeft: 11, marginRight: 11}}>
              <Feather name="coffee" size={24} color="#5DBB63" />
            </View>
          }
          right={props =>
            <View style={styles.icons}>
              <Text>+5</Text>
              <FontAwesome5 name="coins" size={18} color="#5DBB63" />
            </View>
          }
        />
        </List.Section>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const Stack = createStackNavigator();

  export default function RewardsStack() {
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
          name="Transactions" 
          component={TransactionsScreen} />
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