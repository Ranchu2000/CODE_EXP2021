import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Card } from 'react-native-paper';
import {Feather, FontAwesome5, Ionicons, FontAwesome, AntDesign, Entypo, Fontisto} from '@expo/vector-icons';
//import {Camera} from 'expo-camera';

const Reuse = ({ navigation }) => {
    const [isVisible, setVisible]= useState(false);
        return (
            <View style={[styles.container, { backgroundColor: '#EAE6EB' }]}> 
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
                    <Card.Title 
                        title= "Transaction Completed"
                        subtitle= "You have earned 0.5 points!"
                        />
                    <Card.Content>
                        <Text>Location: LiHo @ Ang Moh Kio Hub </Text>
                        <Text>You have saved:  </Text>
                        <View style= {styles.saved} >
                            <Text style= {styles.savedText}>  - 2 x Cups</Text>
                            <Entypo name= "cup" style= {styles.icons}/>
                        </View>
                        <View style= {styles.saved}>
                            <Text style= {styles.savedText}>  - 2 x Bags</Text>
                            <Fontisto name= "shopping-bag-1" style= {styles.icons}/>
                        </View>
                        <Text> Thank you for reducing wastage!</Text>
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
    icons:{
        fontSize: 18,
        color: 'black',
        marginLeft: 15,
        marginBottom: 5
    },
    saved:{
        flexDirection: 'row',
    },
    savedText:{
        marginTop: 5
    }


});

export default Reuse;