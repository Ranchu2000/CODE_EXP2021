import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
const {height, width}= Dimensions.get("window");

export default function ArticleScreen() {
    return (
        <ScrollView> 
        <Card>
        <Card.Title title= "Recycling Efforts at Punggol Sector"/>
        <Card.Content>
            <Text>People living and working in the City-Punggol sector can look forward to smarter and more sustainable services for public waste collection and recycling under a new contract awarded to SembWaste.
            Among them is a new fleet of refuse collection trucks that includes 14 electric vehicles, making up almost 20 per cent of the fleet to be deployed, said the National Environment Agency (NEA) on Wednesday (Jun 9).
            An on-site food waste treatment system will also be introduced at Geylang Serai Market. Food waste collected from the market will be converted into non-potable water, reducing the amount of waste sent to incineration plants, said NEA.
            The market was selected as it has enough space to house the treatment system and generates a sufficiently large quantity of food waste to reap economies of scale, added the agency.</Text>
            <Card.Cover source= {require('../Images/punggol1.jpg')} />
            <Text> The City-Punggol sector covers Hougang, Macpherson and Punggol-West Single Member Constituencies (SMCs) and Sengkang Group Representation Constituency (GRC).
            It also covers parts of Mountbatten and Potong Pasir SMCs, and parts of Aljunied, Ang Mo Kio, Jalan Besar, Marine Parade and Pasir Ris-Punggol GRCs.
            This area comprises about 250,000 households and 16,800 trade premises including hawker and market stalls, shops, places of worship and government buildings, said NEA.</Text>
            <Card.Cover source= {require('../Images/punggol2.jpg')} />
            <Text> The new contract will see SembWaste roll out ergonomic trucks for better worker comfort and safety, said NEA. Trucks will be fitted with a two-step low entry cabin that makes getting in and out of the truck easier and safer.
            Three recycling trucks will also be fitted with side-loaders, increasing collection efficiency in Housing Board estates as larger 2,200L side-loader recycling bins will be deployed there, added the agency.
            "The lower number of collection rounds and truck trips enhances productivity and also reduces the overall carbon footprint of waste collection services," it said.</Text>
        </Card.Content>
        </Card> 
        </ScrollView>
    );
  }

const styles = StyleSheet.create({
    
});