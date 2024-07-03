import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const operation = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Operations</Text>
      <Text style={styles.subtitle}>M & E Servicing</Text>
      <Text style={styles.subtitle}>
        "Grease trap, oil interceptor and IC flushing schedule and service
        report"
      </Text>
      <Text style={styles.subtitle}>Current and upcoming project schedule</Text>
      <Text style={styles.subtitle}>Status of keys and/ or card access to building</Text>
      <Text style={styles.subtitle}>
        Keys listing (master and sub-keys to all plant rooms, rooftop, etc)
      </Text>
      <Text style={styles.subtitle}>Quarterly occupancy survey submission to URA</Text>
      <Text style={styles.subtitle}>Past minutes of meeting with JTC</Text>
      <Text style={styles.subtitle}>Water consumption submission via WEMP, to PUB</Text>
      <Text style={styles.subtitle}>Past monthly management report to JTC</Text>
      <Text style={styles.subtitle}>Past incident reports (e.g. crisis management cases)</Text>
      <Text style={styles.subtitle}>Routine inspection/ defect inspection reports</Text>
      <Text style={styles.subtitle}>SP utilities bill</Text>
      <Text style={styles.subtitle}>CBA report (building</Text>
      <Text style={styles.subtitle}>CBA report (M&E)</Text>
      <Text style={styles.subtitle}>Contact list for vendor under JTC but require FMC to manage</Text>
      <Text style={styles.subtitle}>Annual Carpark Registrations</Text>
      <Text style={styles.subtitle}>Rodent treatment report</Text>
      <Text style={styles.subtitle}>Termite treatment report</Text>
    </View>
  );
};

export default operation;
