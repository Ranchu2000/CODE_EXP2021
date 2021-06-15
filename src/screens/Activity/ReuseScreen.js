import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Card } from 'react-native-paper';
//import {Camera} from 'expo-camera'
// waiting for the camera to work


const Reuse = ({ navigation }) => {
    const [isVisible, setVisible]= useState(false);
        return (
            <View> 
                <Button 
                    title= "Scan QR Code"
                    onPress= {()=> setVisible (!isVisible)}/>
                <Text style= {styles.QRCodeStyle}> QRcode scan </Text>
            <Modal 
                style= {styles.popup}
                // transparent= {true}
                onBackdropPress={()=>setVisible(false)}
                visible= {isVisible}
                >
                    <Card>
                    <Card.Title title= "You Have Received 0.5 Points!"/>
                    <Card.Content>
                        <Text>Store: LiHo @ Ang Moh Kio Hub </Text>
                        <Text>You have saved:  </Text>
                        <Text>  - 2 x Cups</Text>
                        <Text>  - 2 x Straws</Text>
                        <Button 
                            title= "Confirm"
                            onPress={()=>setVisible(false)} />
                    </Card.Content>
                    </Card>
            </Modal>
            </View>)
    
};



const styles = StyleSheet.create({
    QRCodeStyle:{
        height: 250,
        borderRadius: 5,
        borderColor:'black',
        borderWidth: 1,
    },


});

export default Reuse;