import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const asbuilt = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>This is the asbuilt page</Text>
      <View>
        <Text style={styles.subtitle}>Airconditioning and Mechanical Ventilation (ACMV)</Text>
        <Text style={styles.subtitle}>Electrical (UPS, etc...)</Text>
        <Text style={styles.subtitle}>Building Management System (BMS)</Text>
        <Text style={styles.subtitle}>Integrated Building Management System (IBMS)</Text>
        <Text style={styles.subtitle}>Plumbing & Sanitary</Text>
        <Text style={styles.subtitle}>Fire Protection (Intercom, PA etc...)</Text>
        <Text style={styles.subtitle}>Data Center</Text>
        <Text style={styles.subtitle}>Lift and Escalators</Text>
      </View>
    </View>
  ); 
};

export default asbuilt;

