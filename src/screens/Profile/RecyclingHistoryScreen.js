import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph,
StackedBarChart
} from "react-native-chart-kit";

const data = {
  labels: ["May", "Jun", "Jul", "Aug", "Sep"],
  legend: ["Plastic", "Paper", "Electronics"],
  data: [
    [20, 20, 10],
    [30, 10, 10],
    [10, 10, 20],
    [20, 10, 10],
    [10, 10, 10],
  ],
  barColors: ["#3A5311", "#5DBB63", "#99EDC3"]
};

export default function RecyclingHistoryScreen() {
    return (
      <View>
      <StackedBarChart
        style={{marginVertical: 8,
          borderRadius: 16}}
        data={data}
        width={Dimensions.get("window").width}
        height={400}
        yAxisSuffix="kg"

        chartConfig={{ 
          propsForLabels:{
            fontFamily: 'Helvetica',
            fontSize: 12,
            color: 'white',
          },
          valueFormatter: '0',
          backgroundColor: "#ccc",
          backgroundGradientFrom: "#bbb",
          backgroundGradientTo: "#ccc",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
        }}
      />
      </View>
    );
  }

