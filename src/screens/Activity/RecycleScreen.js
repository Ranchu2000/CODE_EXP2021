import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import {Feather, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
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
        <View style= {styles.top}>
        </View>
        <Card style= {styles.topCard}>
            <Card.Title title='What will you be recycling:'/>
            <TouchableOpacity onPress= {()=> setPressed1 (!pressed1)} style= {styles.catergory}>
                <Text style= {styles.catText}> Plastic </Text>  
                {pressed1? 
                <AntDesign style= {styles.iconStyle} name="plussquareo"/>
                : null}
            </TouchableOpacity>
        
        <TouchableOpacity  onPress= {()=> setPressed2 (!pressed2)} style= {styles.catergory}>
            <Text style= {styles.catText}> Glass </Text> 
            {pressed2? 
            <AntDesign style= {styles.iconStyle} name="plussquareo"/>
            : null}
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> setPressed3 (!pressed3)} style= {styles.catergory}>
            <Text style= {styles.catText}> Metal </Text> 
            {pressed3? 
            <AntDesign style= {styles.iconStyle} name="plussquareo"/>
            : null}
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> setPressed4 (!pressed4)} style= {styles.catergory}>
            <Text style= {styles.catText}> Electronics </Text> 
            {pressed4? 
            <AntDesign style= {styles.iconStyle} name="plussquareo"/>
            : null}
        </TouchableOpacity>
        </Card>


        <Card>
        <Card.Title title= "Arrange A Collection!"/>
        <Card
        onPress= {()=> setVisible1(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Select a Date </Text>
        </Card>
        <Card
        onPress= {()=> setVisible2(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Select a Timeslot </Text>
        </Card>
        <Card
        onPress= {()=> setVisible3(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Weight of item</Text>
        </Card>
        <Card
        onPress= {()=> setVisible4(true)}
        style= {styles.optionsStyle}> 
            <Text style= {styles.optionsText}> Upload item image </Text>
        </Card>
        </Card>

        <Modal 
            style= {styles.popup}
            onBackdropPress={()=>setVisible1(false)}
            visible= {isVisible1}>
            <Card>
                <Card.Title title= "Select a Date"/>
                <Card.Content>
                    <Text> Insert Calender Image </Text>
                </Card.Content>
            </Card>
        </Modal>
        <Modal 
            style= {styles.popup}
            onBackdropPress={()=>setVisible2(false)}
            visible= {isVisible2}>
            <Card>
                <Card.Title title= "Select a Time"/>
                <Card.Content>
                    <Text> Insert Scroll Selection </Text>
                </Card.Content>
            </Card>
        </Modal>
        <Modal 
            style= {styles.popup}
            onBackdropPress={()=>setVisible3(false)}
            visible= {isVisible3}>
            <Card>
                <Card.Title title= "Approximate Item Weight:"/>
                <Card.Content>
                    <Text> Insert Scroll Selection </Text>
                </Card.Content>
            </Card>
        </Modal>
        <Modal 
            style= {styles.popup}
            onBackdropPress={()=>setVisible4(false)}
            visible= {isVisible4}>
            <Card>
                <Card.Title title= "Upload the image item:"/>
                <Card.Content>
                    <Text> gg?? </Text>
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
        marginTop: 5,
        fontSize: 30,
        marginLeft: 10
    },
    catergory:{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40
    },
    iconStyle: {
        fontSize: 35,
        color: "black",
        marginTop: 3,
        marginRight: 3,
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
    }

});

export default Recycle;