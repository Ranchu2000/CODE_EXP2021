import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Recycle = ({ navigation }) => {
    const [pressed1, setPressed1]= useState();
    const [pressed2, setPressed2]= useState();
    const [pressed3, setPressed3]= useState();
    const [pressed4, setPressed4]= useState();

    return (
    <ScrollView style={{flex: 1}}> 
        <View style= {styles.top}>
            {/* <Button
            onPress={() => navigation.navigate('Activity1')}
            title="Recycle!"/>
            <Button
            onPress={() => navigation.navigate('Activity2')}
            title="Reduce!"/> */}
        </View>
        <Card>
            <TouchableOpacity onPress= {()=> setPressed1 (!pressed1)} style= {styles.catergory}>
                <Text> Plastic </Text> 
                {pressed1? 
                <AntDesign style= {styles.iconStyle} name="plussquareo"/>
                : null}
            </TouchableOpacity>
        </Card> 
       
        <TouchableOpacity  onPress= {()=> setPressed2 (!pressed2)} style= {styles.catergory}>
            <Text> Glass </Text> 
            {pressed2? 
            <AntDesign style= {styles.iconStyle} name="plussquareo"/>
            : null}
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> setPressed3 (!pressed3)} style= {styles.catergory}>
            <Text> Metal </Text> 
            {pressed3? 
            <AntDesign style= {styles.iconStyle} name="plussquareo"/>
            : null}
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> setPressed4 (!pressed4)} style= {styles.catergory}>
            <Text> Electronics </Text> 
            {pressed4? 
            <AntDesign style= {styles.iconStyle} name="plussquareo"/>
            : null}
        </TouchableOpacity>
        <Text style= {styles.optionsStyle}>Arrange Pickup</Text>
        <Text style= {styles.CalendarStyle}> Image of Calendar</Text>
        <Text style= {styles.optionsStyle}>Time</Text>
        <Text style= {styles.optionsStyle}>Location</Text>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    top: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    catergory:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconStyle: {
        fontSize: 35,
        color: "black"
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

    }

});

export default Recycle;