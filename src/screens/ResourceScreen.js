import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';


const ResourceScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}> 
      <Text style={styles.text}>Waste Articles!</Text>
      <Text style={styles.text}>Latest News!</Text>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
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
    </ScrollView>

    <Text style={styles.text}>Recycling Tips!</Text>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
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
    </ScrollView>

    <Text style={styles.text}>Contribute!</Text>
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {false}
      >
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
    </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  section:{
      flexDirection: "row"
  }
  post:{
      height: 200,
      flex: 1,
  }
});

export default ResourceScreen;

