import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const DATA = [
  { id: '1',
    title: 'Notifications',
  },
  { id: '2',
    title: 'Security',
  },
  { id: '3',
    title: 'Account',
  },
  { id: '4',
    title: 'Help',
  },
  { id: '5',
    title: 'About',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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

function AppointmentsScreen({ navigation }) {
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate({ title });
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

  const Stack = createStackNavigator();

  export default function SettingsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
      </Stack.Navigator>
    );
  }