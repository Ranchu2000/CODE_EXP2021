import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
//import {Camera} from 'expo-camera'
// waiting for the camera to work
const Activity2Screen = ({ navigation }) => {
    const [pressed, setPressed]= useState();
    const [startCamera,setStartCamera] = React.useState(false);
    // const __startCamera = async () => {
    //     const {status} = await Camera.requestPermissionsAsync()
    //  if(status === 'granted'){
    //    // do something
    //    setStartCamera(true)
    //  }else{
    //    Alert.alert("Access denied")
    //  }
    // }
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
                {/* {startCamera ? (
                        <Camera
                        style={{flex: 1,width:"100%"}} 
                        ref={(r) => {
                            camera = r}}
                        ></Camera>
                    ) : (
                        <View
                        style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        >
                        <TouchableOpacity
                            onPress={__startCamera}
                            style={{
                            width: 130,
                            borderRadius: 4,
                            backgroundColor: '#14274e',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40
                            }}
                        >
                            <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                            >
                            Take picture
                            </Text>
                        </TouchableOpacity>
                        </View>
                     )} */}
            <StatusBar style="auto" />
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