import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const ehs = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Environmental Health & Safety</Text>
      <View>
        <Text style={styles.subtitle}>Site specific or system specific risk assessment reports</Text>
        <Text style={styles.subtitle}>Emergency Control Procedures</Text>
        <Text style={styles.subtitle}>Disaster Recovery Site Plans</Text>
        <Text style={styles.subtitle}>General Works Permits Register with history data</Text>
        <Text style={styles.subtitle}>Hot Works Permits Register with history data</Text>
        <Text style={styles.subtitle}>Confined Spaces Permits Register with history data</Text>
        <Text style={styles.subtitle}>Incident Report Tracker and Past indent reports</Text>
        <Text style={styles.subtitle}>External / Internal audit reports</Text>
        <Text style={styles.subtitle}>Key Management System (Signatories/ Authorities etc) & Register</Text>
        <Text style={styles.subtitle}>Hand Trucks / Ladders/ Trolleys Inventory list</Text>
        
        <Text style={styles.subtitle}>In-house PPM reports</Text>
        <Text style={styles.subtitle}>Minutes of meeting of all HSE related meeting</Text>
        <Text style={styles.subtitle}>Post mortem of all Emergency Response Drill</Text>
        <Text style={styles.subtitle}>Waste Disposal records</Text>
        <Text style={styles.subtitle}>Training records</Text>
      </View>
    </View>
  );
};

export default ehs;
