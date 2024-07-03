import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const softServices = () => {
  return (
    <View style={styles.container}>
      <View>
        <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
        <Text style={styles.title}>Soft Services</Text>
      </View>
      <View>
        <Link style={styles.back} href="/hoto/softServices/cleaning">Cleaning Services</Link>
        <Link style={styles.back} href="/hoto/softServices/landscape">Landscaping</Link>
        <Link style={styles.back} href="/hoto/softServices/pestcontrol">Pest Control</Link>
        <Link style={styles.back} href="/hoto/softServices/waste">Waste Services</Link>
        <Link style={styles.back} href="/hoto/softServices/security">Security Services</Link>
      </View>
    </View>
  );
};

export default softServices;