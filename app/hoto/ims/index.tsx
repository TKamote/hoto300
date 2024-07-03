import { View, Text, } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const ims = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Integrated Management System</Text>
      <Text style={styles.subtitle}>Status update of all pending works</Text>
      <Text style={styles.subtitle}>Current Schedule of Rates agreed for ad-hoc services</Text>
      <Text style={styles.subtitle}>Compliance - Legal statutory tracker</Text>
      <Text style={styles.subtitle}>Annual Maintenance Contract (AMC) Tracker</Text>
      <Text style={styles.subtitle}>Site Issue Tracker</Text>
      <Text style={styles.subtitle}>Site Snag Register</Text>
      <Text style={styles.subtitle}>ISO certification - Management Reporting (MR) Reports</Text>
      <Text style={styles.subtitle}>OSHAS certification - Management Reporting (MR) Reports</Text>
      <Text style={styles.subtitle}>Restricted Access Register</Text>
      <Text style={styles.subtitle}>Deployment organisation chart</Text>
      <Text style={styles.subtitle}>Monthly report submission to client</Text>
      <Text style={styles.subtitle}>KPI record</Text>
      <Text style={styles.subtitle}>Handing Over Taking over record</Text>
      <Text style={styles.subtitle}>Fault reporting record (OMS / RAFA)</Text>
      <Text style={styles.subtitle}><Link style={[styles.title, { color: "blue"}]} href="/hoto/ims/subconRiskRegister">Risk register</Link> of contractor (RA / SWP / MS / Safety Briefing / BizSafe cert, SDS, Training Matrix etc)</Text>
      <Text style={styles.subtitle}>Contractor evaluation (BCA format)</Text>
      <Text style={styles.subtitle}>MOM (Monthly operation meeting) (Latest 3 months)</Text>
      <Text style={styles.subtitle}>HSSE incident report record</Text>
      <Text style={styles.subtitle}>Network license, if applicable (IMDA)</Text>
      <Text>System passwords (BMS, CCTV, card access etc)</Text>
      <Text>EV charging station</Text>
      <Text>PV system</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      {/* {[
        "Status update of all pending works",
        "Current Schedule of Rates agreed for ad-hoc services",
        "Compliance - Legal statutory tracker",
        "Annual Maintenance Contract (AMC) Tracker",
        "Site Issue Tracker",
        "Site Snag Register",
        "ISO certification - Management Reporting (MR) Reports",
        "OSHAS certification - Management Reporting (MR) Reports",
        "Restricted Access Register", "Deployment organisation chart","Monthly report submission to client",
        "KPI record ",
      ].map((item, index) => (
        <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
          <input type="checkbox" />
          <Text style={styles.subtitle}>{item}</Text>
        </View> 
      ))}*/}
    </View>
  );
};

export default ims;


