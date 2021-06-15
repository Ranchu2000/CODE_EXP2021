import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import {FontAwesome, FontAwesome5, Feather, AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Card, List, Title, Paragraph } from 'react-native-paper';
import Modal from 'react-native-modal';

const Recycle = ({ navigation }) => {
    const [pressed1, setPressed1]= useState();
    const [pressed2, setPressed2]= useState();
    const [pressed3, setPressed3]= useState();
    const [pressed4, setPressed4]= useState();
    const [isVisible1, setVisible1]= useState(false);
    const [isVisible2, setVisible2]= useState(false);
    const [isVisible3, setVisible3]= useState(false);
    const [isVisible4, setVisible4]= useState(false);


    return (
    <ScrollView style={{flex: 1}}> 

        <Card style= {styles.topCard}>
            <Card.Title title='What will you be recycling:'/>
        
            <TouchableOpacity onPress= {()=> setPressed1 (!pressed1)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <Text style= {styles.catText}> Plastic </Text>  
                    <FontAwesome5 name="prescription-bottle" size={24} color="black" />
                </View>
                {pressed1? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> setPressed2 (!pressed2)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <Text style= {styles.catText}> Glass</Text>  
                    <FontAwesome name= "glass"  style= {styles.icons} />
                </View>
                {pressed2? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> setPressed3 (!pressed3)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <Text style= {styles.catText}> Paper </Text>  
                    <Ionicons name= "newspaper" style= {styles.icons} />
                </View>
                {pressed3? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> setPressed4 (!pressed4)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <Text style= {styles.catText}> Electronics </Text>  
                    <Feather name="hard-drive" style= {styles.icons} />
                </View>
                {pressed4? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>
        </Card>


        <Card>
        <Card.Title title= "Arrange A Collection!"/>
        <Card
        onPress= {()=> setVisible1(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Date </Text>
        </Card>
        <Card
        onPress= {()=> setVisible2(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Timeslot </Text>
        </Card>
        <Card
        onPress= {()=> setVisible3(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Weight</Text>
        </Card>
        <Card
        onPress= {()=> setVisible4(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Upload </Text>
        </Card>
        <TouchableOpacity 
            style={styles.submitParent}
            onPress= {()=> setVisible1(true)}>
            <Feather name= "send" style={styles.submit} />
        </TouchableOpacity>
        </Card>

        <Modal 
            style= {styles.popup}
            onBackdropPress={()=>setVisible1(false)}
            visible= {isVisible1}>
            <Card>
                <Card.Title 
                    title= "Collection Confirmed"/>
                <Card.Content>
                    <Text>Collection will take place on 07/07/2021 at 08:00am </Text>
                    <Text>To manage appointments, refer to 'My Appointments' on the Profile Page. </Text>
                    <Text>Thank you for doing your part to recycle!</Text>
                </Card.Content>
            </Card>
        </Modal>
    
        
        
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    top: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    topCard:{
        marginBottom: 20
    },
    catText:{
        fontSize: 30,
        marginLeft: 10
    },
    catergory:{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40
    },
    iconStyle: {
       
    },
    CalendarStyle:{
        height: 250,
        borderRadius: 5,
        borderColor:'black',
        borderWidth: 1,
    },
    optionsStyle:{
        height: 50,
        borderRadius: 5,
        borderColor:'black',
        borderWidth: 1,

    },
    optionsText:{
        marginTop: 5,
        fontSize: 30,
        marginLeft: 10,
    },
    icons:{
        fontSize: 24,
        color: "black"
    },
    marker:{
        fontSize: 30,
        color: "black",
        marginRight: 10,
    },
    submit:{
        fontSize: 40,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        
    },
    submitParent:{
        alignItems: 'center',
    }
    
});

export default Recycle;