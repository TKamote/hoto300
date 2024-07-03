import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const operation = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Operation and Maintenance Manuals</Text>
      <View>
        <Text style={styles.subtitle}>Airconditioning and Mechanical Ventilation (ACMV)</Text>
        <Text style={styles.subtitle}>Electrical (UPS, etc...)</Text>
        <Text style={styles.subtitle}>Building Management System (BMS)</Text>
        <Text style={styles.subtitle}>Integrated Building Management System (BMS)</Text>
        <Text style={styles.subtitle}>Plumbing & Sanitary</Text>
        <Text style={styles.subtitle}>Fire Protection (Intercom, PA etc...)</Text>
        <Text style={styles.subtitle}>Data Center</Text>
        <Text style={styles.subtitle}>CCTV</Text>
        <Text style={styles.subtitle}>Solar PV if any</Text>
        <Text style={styles.subtitle}>Auto Doors</Text>
        
      </View>
    </View>
  );
};

export default operation;
