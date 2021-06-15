import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
const {height, width}= Dimensions.get("window");

export default function ArticleScreen() {
    return (
        <ScrollView> 
            <Text>some articles</Text>
            <Image source= {require('./unnamed.jpg')} style= {styles.image}/>
        </ScrollView>
    );
  }

const styles = StyleSheet.create({
    image:{
      width: width,
      height: height,
      marginLeft: 5,
      marginRight: 30
    }
});