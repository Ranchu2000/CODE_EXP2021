import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';


const Activity2Screen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}> 
        <View style= {styles.top}>
            <Button
            onPress={() => navigation.navigate('Activity1')}
            title="Recycle!"/>
            <Button
            onPress={() => navigation.navigate('Activity2')}
            title="Reduce!"/>
        </View>
        
    
    </View>
  );
};


const styles = StyleSheet.create({
  top: {
    flexDirection: "row"
  }

});

export default Activity2Screen;