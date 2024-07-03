import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";

const landscape = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto/softServices">Back to Soft Services</Link>
      <Text style={styles.title}>Landscaping</Text>
      <View>
        <Text style={styles.subtitle}>Maintenance Schedule</Text>
        <Text style={styles.subtitle}>
          All past work orders / Service report / Completion form till current.
        </Text>
        <Text style={styles.subtitle}>Past Arborist Report </Text>
        <Text style={styles.subtitle}>Grass cutting deployment on site</Text>
        <Text style={styles.subtitle}>Horticultural waste tonnage report</Text>
        <Text style={styles.subtitle}>"Current master training plan for Landscape technician"</Text>
        <Text style={styles.subtitle}>Tree plan</Text>
        <Text style={styles.subtitle}>Landscape boundary plan</Text>
        <Text style={styles.subtitle}>Tree tagging list, if applicable</Text>
        <Text style={styles.subtitle}>Others (if any)</Text>
      </View>
    </View>
  );
};

export default landscape;
