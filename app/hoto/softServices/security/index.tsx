import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";

const security = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto/softServices">Back to Soft Services</Link>
      <Text style={styles.title}>Security Services</Text>
      <View>
        <Text style={styles.subtitle}>Deployment</Text>
        <Text style={styles.subtitle}>Guards Licenses</Text>
        <Text style={styles.subtitle}>Escalation</Text>
      </View>
    </View>
  );
};

export default security;
