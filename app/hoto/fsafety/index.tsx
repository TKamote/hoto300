import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const fsafety = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/hoto/fsafety/fsdoc">Fire Safety Documents</Link>
      <Text style={styles.subtitle}>Emergency Response Plan (ERP)</Text>
      <Text>Emergency drills record</Text>
      <Text style={styles.subtitle}>Annual FSM Reports</Text>
      <Text style={styles.subtitle}>Fire Drill Details (e.g. reports)</Text>
      <Text style={styles.subtitle}>Genset Full Load Test Reports</Text>
      <Text style={styles.subtitle}>SCDF CERT drills/ Audits reports / information</Text>
      <Text style={styles.subtitle}>SCDF Form (Genset Full Load Test Reports and other rpeorts)</Text>
      <Text>Maintenance records of fire protection system (fire extinguishers, sprinklers pumps, jockey pumps etc.)</Text>
      <Text>Appointed FSM</Text>
      <Text>FSM yearly schedule </Text>
      <Text>FSM annual report record</Text>
      <Text>FSM inspection records</Text>
      <Text>First Aid Kit</Text>
      <Text>First Aider</Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default fsafety;
