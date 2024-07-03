import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const sstandard = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">
        Back to HOTO main page
      </Link>
      <Text style={styles.title}>Good Practice (CP / SS Standards) </Text>
      <Text style={styles.subtitle}>Building LEW Report & Permit</Text>
      <Text style={styles.subtitle}>T & C to obtain Fire Certificate</Text>
      <Text style={styles.little}>Staircase Presurrisation Test</Text>
      <Text style={styles.little}>Generator Full Load Test</Text>
      <Text style={styles.little}>Hydrant Test for those with Pump</Text>
      <Text style={styles.little}>Hose Reel Test (throw 10m?)</Text>
      <Text style={styles.little}>Dry Riser Hydrostatic Test</Text>
      <Text style={styles.verlittle}>
        Integrated System Test with Genset, Lift &
        Escalators, PA System, Card Access, Gas Suppression System, Atrium Smoke
        Control, Engineering Smoke Control System, Carpark Fan System, BMSand any other
        system interfacing with Fire Alarm System
      </Text>
      <Text style={styles.subtitle}>Electrical Tagging Register</Text>
      <Text style={styles.subtitle}>
        Fire Extinguisher Maintenance and Testing Register
      </Text>
      <Text style={styles.subtitle}>ELCB Testing Register/Log</Text>
      <Text style={styles.subtitle}>
        Green mark certificates & reports (e.g. Submission to BCA)
      </Text>
      <Text style={styles.subtitle}>
        Electrical Inspection Reports (6 monthly by LEW)
      </Text>
      <Text style={styles.subtitle}>
        Annual / Bi Yearly Electrical Shutdown Reports
      </Text>
      <Text style={styles.subtitle}>
        Lightning Protection Inspection Reports
      </Text>
      <Text style={styles.subtitle}>
        Indoor Air Quality Testing process and Reports
      </Text>
    </View>
  );
};

export default sstandard;
