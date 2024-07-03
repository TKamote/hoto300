import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const utilities = () => {
  return (
    <View style={styles.container}>
     <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Utilities</Text>
      <Text style={styles.subtitle}>Domestic Water Daily Reading</Text>
      <Text style={styles.subtitle}>Domestic Water Monthly Consumption Summary</Text>
      <Text style={styles.subtitle}>NeWater Daily Reading</Text>
      <Text style={styles.subtitle}>NeWater Monthly Consumption Summary</Text>
      <Text style={styles.subtitle}>Electricity Daily Reading</Text>
      <Text style={styles.subtitle}>Electricity Monthly Consumption Summary</Text>
      <Text style={styles.subtitle}>WCC Chilled Water Daily Reading</Text>
      <Text style={styles.subtitle}>WCC Chilled Monthly Consumption Summary</Text>
      <Text style={styles.subtitle}>LPG Gas Daily Reading</Text>
      <Text style={styles.subtitle}>LPG Gas Monthly Consumption Summary</Text>
    </View>
  );
};

export default utilities;
