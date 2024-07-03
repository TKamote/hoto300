import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";

const pestcontrol = () => {
  return (
    <View style={styles.container}>
       <Link style={styles.back} href="/hoto/softServices">Back to Soft Services</Link>
       <Text style={styles.title}>Pest Control</Text>
      <View>
        <Text style={styles.subtitle}>Maintenance schedule</Text>
        <Text style={styles.subtitle}>Past service reports till current</Text>
        <Text style={styles.subtitle}>Locality of baits c/w qty</Text>
        <Text style={styles.subtitle}>Approved Chemical list</Text>
        <Text style={styles.subtitle}>Current master training plan for pest control technician</Text>
        <Text style={styles.subtitle}>Joint inspection form with client</Text>
        <Text style={styles.subtitle}>Past monthly reports (Year 2023)</Text>
        <Text style={styles.subtitle}>Doc. on pest infestation on site (If any)</Text>
        <Text style={styles.subtitle}>Past ad-hoc request on pest issue c/w service report</Text>
        <Text style={styles.subtitle}>Others (if any)</Text>
      </View>
    </View>
  );
};

export default pestcontrol;
