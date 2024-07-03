import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const meSubContracts = () => {
  return (
    <View style={styles.container}>
     <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Subcontractors Management</Text>
      <Text style={styles.subtitle}>List of subcontractors</Text>
      <Text style={styles.subtitle}>Six (6) Monthly Feedback (BCA) format</Text>
      <Text style={styles.subtitle}>Invoicing issues</Text>
      <Text style={styles.subtitle}>Outstanding Works</Text>
      <Text style={styles.subtitle}>Monthly Meeting</Text>
      <Text style={styles.subtitle}>Escalation Chart</Text>
    </View>
  );
};

export default meSubContracts;
