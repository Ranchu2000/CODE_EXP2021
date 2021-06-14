import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./DetailsScreen"
const DATA = [
  {
    id: '1',
    title: 'Notifications',
  },
  {
    id: '2',
    title: 'Security',
  },
  {
    id: '3',
    title: 'Account',
  },
  {
    id: '4',
    title: 'Help',
  },
  {
    id: '5',
    title: 'About',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function SettingsScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Details");
        }}>
              <Item title={item.title} />
        </TouchableOpacity>

      );
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
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