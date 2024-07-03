import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";

const waste = () => {
  return (
    <View style={styles.container}>
       <Link style={styles.back} href="/hoto/softServices">Back to Soft Services</Link>
      <Text style={styles.title}>Waste Services</Text>
      <View>
        <Text style={styles.subtitle}>Maintenance schedule</Text>
        <Text style={styles.subtitle}>Past general waste tonnage reports till current</Text>
        <Text style={styles.subtitle}>Past waste disposal reports till current</Text>
        <Text style={styles.subtitle}>Past recycle waste tonnage reports till current</Text>
        <Text style={styles.subtitle}>Localities of recycle waste bin c/w quatity on site</Text>
        <Text style={styles.subtitle}>Job description of waste collector</Text>
        <Text style={styles.subtitle}>Past site risk assessment</Text>
        <Text style={styles.subtitle}>Others e.g. Analysis of past wastes trending</Text>
      </View>
    </View>
  );
};

export default waste;
