import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {List, Card} from "react-native-paper"
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 
import TransactionsScreen from '../Profile/TransactionsScreen';

const Tab = createMaterialTopTabNavigator();

function CatalogueScreen({ navigation }) {
  return(
    
    <SafeAreaView style={[styles.container, { backgroundColor: '#EAE6EB' }]}>
      <ScrollView>
      <List.Item
        title="Total Coins:"
        titleStyle= {{fontWeight: "bold", fontSize: 20}}
        description="more"
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
        onPress={() => {
          navigation.navigate("Transactions");
      }}
      />
      
      <List.Item
        title="$5 off any handcrafted beverage"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'https://creative.starbucks.com/images/logos/logo-1987.png'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>200</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />

      <List.Item
        title="Buy 2 get 1 free deal"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'https://creative.starbucks.com/images/logos/logo-1987.png'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>100</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />

      <List.Item
        title="Free Chocolate Chip Muffin"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'https://creative.starbucks.com/images/logos/logo-1987.png'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>300</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />

      <List.Item
        title="$10 voucher"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'data:image/png;base64,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'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>500</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />
      <List.Item
        title="Free Rice Cooker"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'data:image/png;base64,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'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>900</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />

      <List.Item
        title="5% cashback with min. spend $200"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'data:image/png;base64,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'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>200</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />

      <List.Item
        title="Free Taro Milk Tea with min. spend $10"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'https://www.passioncard.gov.sg/images/default-source/images-pac/passion-merchants/liho-logo-500x500.png?sfvrsn=5a502eaf_0'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>100</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />
      <List.Item
        title="Buy 2 get 1 free"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'https://www.passioncard.gov.sg/images/default-source/images-pac/passion-merchants/liho-logo-500x500.png?sfvrsn=5a502eaf_0'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>200</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />
      <List.Item
        title="Free Pearl Milk Tea"
        description="valid till 31/12/21"
        left={props => 
        <View style={styles.icons}>
          <Image style={styles.image} source={{ uri: 
            'https://www.passioncard.gov.sg/images/default-source/images-pac/passion-merchants/liho-logo-500x500.png?sfvrsn=5a502eaf_0'}} />
        </View>
        }
        right={props =>
          <View style={styles.icons}>
            <Text>200</Text>
            <FontAwesome5 name="coins" size={18} color="5DBB63" />
          </View>
        }
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function CatalogueStack() {
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
      name="Catalogue" 
      component={CatalogueScreen} />
      <Stack.Screen options={{headerShown: false}} name="Transactions" component={TransactionsScreen} />
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
  headIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },

  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },    
  topBarRight:{
    marginRight: 20,
    marginBottom: 10
  },

});