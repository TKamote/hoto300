import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";

const cleaning = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back}href="/hoto/softServices">Back to Soft Services</Link>
      <Text style={styles.title}>Cleaning Services</Text>
      <View>
        <Text style={styles.subtitle}>Periodic cleaning schedule (current)</Text>
        <Text style={styles.subtitle}>Equipment List</Text>
        <Text style={styles.subtitle}>Current job description for all cleaners and supervisors</Text>
        <Text style={styles.subtitle}>All past service reports till current </Text>
        <Text style={styles.subtitle}>All past work orders/ Service report/ Completion form</Text>
        <Text style={styles.subtitle}>
          Current master training plan g Past joint Inspection checklists
        </Text>
        <Text style={styles.subtitle}>Past minutes of meetings with cleaning vendor</Text>
        <Text style={styles.subtitle}>Past Joint Inspection checklists with cleaning vendor</Text>
        <Text style={styles.subtitle}>Cleaning supervisor daily checklists</Text>
        <Text style={styles.subtitle}>"Past monthly reports submitted by cleaning vendor"</Text>
        <Text style={styles.subtitle}>Others (if any)</Text>
      </View>
    </View>
  );
};

export default cleaning;
