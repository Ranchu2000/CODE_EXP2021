import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}> 
      <Text style={styles.text}>Lets Trash it!</Text>
      <ScrollView>
      <View style= {styles.post}>
            <Text> 14th June 2021 0900hrs </Text>
            <Text> Recycling Activity 1 By Yu Fei: </Text>
            <Text> Recycled 5kg of Paper</Text>
            <Text> 2 Reward Points Earned!</Text>
      </View>
      <View style= {styles.post}>
            <Text> 13th June 2021 0900hrs </Text>
            <Text> Reducing Activity 2 By Jian Rong: </Text>
            <Text> Brought my own cup to Starbux</Text>
            <Text> 0.2 Reward Points Earned!</Text>
      </View>
      <View style= {styles.post}>
            <Text> 13th June 2021 0900hrs </Text>
            <Text> Reducing Activity 2 By Jian Rong: </Text>
            <Text> Brought my own cup to Starbux</Text>
            <Text> 0.2 Reward Points Earned!</Text>
      </View>
      <View style= {styles.post}>
            <Text> 13th June 2021 0900hrs </Text>
            <Text> Reducing Activity 2 By Jian Rong: </Text>
            <Text> Brought my own cup to Starbux</Text>
            <Text> 0.2 Reward Points Earned!</Text>
      </View>
      <View style= {styles.post}>
            <Text> 13th June 2021 0900hrs </Text>
            <Text> Reducing Activity 2 By Jian Rong: </Text>
            <Text> Brought my own cup to Starbux</Text>
            <Text> 0.2 Reward Points Earned!</Text>
      </View>
      <View style= {styles.post}>
            <Text> Hello Yufei can you see this</Text>
      </View>
      <Button
        onPress={() => navigation.navigate('Resource')}
        title="Resource!"
      />
      <Button
        onPress={() => navigation.navigate('Activity1')}
        title="Activity!"
      />
    </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  post:{
      height: 200
  }
});

export default HomeScreen;