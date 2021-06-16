import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput, Dimensions, Picker } from 'react-native';
import {FontAwesome, FontAwesome5, Feather, AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Card, List, Title, Paragraph } from 'react-native-paper';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
const {height, width}= Dimensions.get("window");

const Recycle = ({ navigation }) => {
    const [pressed1, setPressed1]= useState();
    const [pressed2, setPressed2]= useState();
    const [pressed3, setPressed3]= useState();
    const [pressed4, setPressed4]= useState();
    const [pressed5, setPressed5]= useState();
    const [isVisible1, setVisible1]= useState(false);
    const[expanded, setExpanded]= useState(false);
    const [selectedValue, setSelectedValue]= useState("Time Slot");
    const [selectedValue1, setSelectedValue1]= useState("Weight");
    const [date, setDate]= useState(new Date());


    return (
    <ScrollView style={{flex: 1}}> 
      <View style= {[styles.top, { backgroundColor: '#EAE6EB' }]}>
      </View>
        <Card style= {styles.topCard}>
            <Card.Title title='Select recyclables:'/>
        
            <TouchableOpacity onPress= {()=> setPressed1 (!pressed1)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <FontAwesome5 name="prescription-bottle" style= {styles.icons}  />
                    <Text style= {styles.catText}> Plastic </Text>  
                </View>
                {pressed1? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> setPressed2 (!pressed2)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <FontAwesome name= "glass"  style= {styles.icons} />
                    <Text style= {styles.catText}> Glass</Text>  
                </View>
                {pressed2? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> setPressed3 (!pressed3)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <Ionicons name= "newspaper" style= {styles.icons} />
                    <Text style= {styles.catText}> Paper </Text>  
                </View>
                {pressed3? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> setPressed4 (!pressed4)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <FontAwesome5 name="drum-steelpan" style= {styles.icons} />
                    <Text style= {styles.catText}> Metal </Text>                    
                </View>
                {pressed4? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

            <TouchableOpacity onPress= {()=> setPressed4 (!pressed5)} style= {styles.catergory}>
                <View style= {styles.top}> 
                    <Feather name="hard-drive" style= {styles.icons} />
                    <Text style= {styles.catText}> Electronics </Text>                    
                </View>
                {pressed5? 
                <MaterialCommunityIcons name= "sticker-check-outline" style= {styles.marker}/>
                : null}
            </TouchableOpacity>

        </Card>


        <Card>
        <Card.Title title= "Collection Details:"/>

       
        <List.Accordion
            title= "Date"
            >
            <View style={styles.CalendarStyle}>
                <DateTimePicker
                    onDateChange={()=>setDate}
                    value= {date}
                    />
            </View>
        </List.Accordion>
        <List.Accordion
            title= {selectedValue}>
            <Picker
                selectedValue= {selectedValue}
                onValueChange= {(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="06:00am" value="06:00am" />
                <Picker.Item label="07:00am" value="07:00am" />
                <Picker.Item label="08:00am" value="08:00am" />
                <Picker.Item label="09:00am" value="09:00am" />
                <Picker.Item label="10:00am" value="10:00am" />
                <Picker.Item label="11:00am" value="11:00am" />
                <Picker.Item label="12:00pm" value="12:00pm" />
                <Picker.Item label="01:00pm" value="01:00pm" />
                <Picker.Item label="02:00pm" value="02:00pm" />
                <Picker.Item label="03:00pm" value="03:00pm" />
                <Picker.Item label="04:00pm" value="04:00pm" />
                <Picker.Item label="05:00pm" value="05:00pm" />
                <Picker.Item label="06:00pm" value="06:00pm" />
                <Picker.Item label="07:00pm" value="07:00pm" />
                <Picker.Item label="08:00pm" value="08:00pm" />
                <Picker.Item label="09:00pm" value="09:00pm" />
                <Picker.Item label="10:00pm" value="10:00pm" />
            </Picker>
        </List.Accordion>
        <List.Accordion
            title= {selectedValue1}>
            <Text> Minimum 5KG </Text>
            <Picker
                selectedValue1= {selectedValue1}
                onValueChange= {(itemValue, itemIndex) => setSelectedValue1(itemValue)}>
                <Picker.Item label="5KG" value="5KG" />
                <Picker.Item label="6KG" value="6KG" />
                <Picker.Item label="7KG" value="7KG" />
                <Picker.Item label="8KG" value="8KG" />
                <Picker.Item label="9KG" value="9KG" />
                <Picker.Item label="10KG" value="10KG" />
                <Picker.Item label="> 10KG" value=" above 10KG" />
            </Picker>
        </List.Accordion>
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
        fontSize: 16,
    },
    catergory:{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40
    },

    CalendarStyle:{
      marginLeft: width*0.35,
    },
    optionsStyle:{
        height: 50,
        borderRadius: 5,
        borderColor:'black',
        borderWidth: 1,

    },
    optionsText:{
        marginTop: 5,
        fontSize: 24,
        marginLeft: 10,
    },
    icons:{
        fontSize: 18,
        color: "#5DBB63",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    marker:{
        fontSize: 24,
        color: "#5DBB63",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    submit:{
        fontSize: 40,
        color: '#5DBB63',
        marginTop: 10,
        marginBottom: 10,
        
    },
    submitParent:{
        alignItems: 'center',
    }
    
});

export default Recycle;