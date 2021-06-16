import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Card } from 'react-native-paper';
import {Feather, FontAwesome5, Ionicons, FontAwesome, AntDesign, Entypo, Fontisto} from '@expo/vector-icons';
import {Camera} from 'expo-camera';
import {BarCodeScanner} from 'expo-barcode-scanner';

const Reuse = ({ navigation }) => {
    const [isVisible, setVisible]= useState(false);
        return (
            <View style={[styles.container, { backgroundColor: '#EAE6EB' }]}> 
                <Button 
                    title= "Scan QR Code"
                    onPress= {()=> setVisible (!isVisible)}/>

                {/* <Text style= {styles.QRCodeStyle}> QRcode scan </Text> */}

                <Card style={styles.card}>
                    <View style={styles.profile}>
                    <Card.Cover 
                    source={{ uri: 'https://cdn2.vectorstock.com/i/thumb-large/18/01/qr-code-with-red-frame-label-contains-product-vector-29001801.jpg' }}
                    style={{
                        width: 320,
                        height: 320,
                    }}
                    />
                    </View>
                    <Card.Title/>
                </Card>
                
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
                        <Text> Thank you for reducing waste!</Text>
                        <Button 
                            title= "Confirm"
                            onPress={()=>setVisible(false)} />
                    </Card.Content>
                    </Card>
            </Modal> 
            </View>)
    
};


const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
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
    },
    scannerImage:{
        height:50,
        width: 50,
        borderRadius: 25,
    }


});

export default Reuse;