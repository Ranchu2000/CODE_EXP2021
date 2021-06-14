import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';


const Activity2Screen = ({ navigation }) => {
    const [pressed, setPressed]= useState();
    //if (pressed){
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
                <Button 
                    title= "Scan QR Code"
                    onPress= {()=> setPressed (!pressed)}
                    style= {styles.optionsStyle}/>
                <Text style= {styles.QRCodeStyle}> QRcode scan </Text>
                {pressed? 
                    <View>
                    <Text>Details </Text>
                    <Text>Store: LiHo @ Ang Moh Kio Hub </Text>
                    <Text>You have saved:  </Text>
                    <Text>2 x Cups</Text>
                    <Text>2 x Straws</Text>
                    <Button title= "Confirm" />
                    </View>
                : null}
                
            </View>)
    
};



const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  optionsStyle:{
    height: 50,
    borderRadius: 5,
    borderColor:'black',
    borderWidth: 1,
    },
    QRCodeStyle:{
        height: 250,
        borderRadius: 5,
        borderColor:'black',
        borderWidth: 1,
    },

});

export default Activity2Screen;