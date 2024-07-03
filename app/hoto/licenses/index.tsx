import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from "../globalStyles";

const licenses = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>REGULATORY REQUIREMENTS - Construction to Pre-Opening / TOP</Text>
     <View>
        <Text style={styles.subtitle}>Certificate of Satutory Completion (BCA)</Text>
        <Text style={styles.subtitle}>Approved unit numbering (IRAS)</Text>
        <Text style={styles.subtitle}>Authorities’ waiver, if any</Text>
        <Text style={styles.subtitle}>Fire Safety Certificate (SCDF)</Text>
        <Text style={styles.subtitle}>FSC Drawing Submission (not license but needs to have a copy)</Text>
        <Text style={styles.subtitle}>Lift & Escalator PTO (BCA)</Text>
        <Text style={styles.subtitle}>Gondola / (BMU) (MOM)</Text>
        <Text style={styles.subtitle}>Gas Inspection (by License Gas Service Worker) (NEA)</Text>
        <Text style={styles.subtitle}>Electrical Installtion License (EMA)</Text>
        <Text style={styles.subtitle}>Petroleum & Flammable Materials Storage License (SCDF)</Text>
        <Text style={styles.subtitle}>Signage Licenses (BCA)</Text>
        <Text style={styles.subtitle}>Lifting Platforms - Inspection Certificates (MOM)</Text>
        <Text style={styles.subtitle}>Pressure Vessel (Receiver Tank) Certificates (MOM)</Text>
        <Text style={styles.subtitle}>Trade Effluent Discharge (PUB) [WA]</Text>
        <Text style={styles.subtitle}>Hazardous Substance Permit (NEA)</Text>
     </View>
     <Text style={styles.title}>REGULATORY REQUIREMENTS - Periodic</Text>
     <View style={styles.title}>
        <Text style={styles.subtitle}>Fire Safety Certificate (SCDF)</Text>
        <Text style={styles.subtitle}>FSC Drawing Submission (not license but needs to have a copy)</Text>
        <Text style={styles.subtitle}>Lift & Escalator PTO (BCA)</Text>
        <Text style={styles.subtitle}>Lift & Escalator 5 - Yearly Inspection (BCA)</Text>
        <Text style={styles.subtitle}>Gondola / (BMU) (MOM)</Text>
        <Text style={styles.subtitle}>Gas Inspection (by License Gas Service Worker) (NEA)</Text>
        <Text style={styles.subtitle}>Electrical Installtion License (EMA)</Text>
        <Text style={styles.subtitle}>Petroleum & Flammable Materials Storage License (SCDF)</Text>
        <Text style={styles.subtitle}>Signage Licenses (BCA)</Text>
        <Text style={styles.subtitle}>Lifting Platforms - Inspection Certificates (MOM)</Text>
        <Text style={styles.subtitle}>Pressure Vessel (Receiver Tank) Certificates (MOM)</Text>
        <Text style={styles.subtitle}>Trade Effluent Discharge (PUB)</Text>
        <Text style={styles.subtitle}>Hazardous Substance Permit (NEA)</Text>
        <Text style={styles.subtitle}>Annual Cleaning and Disinfection of Water Storage Tanks (PUB)</Text>
        <Text style={styles.subtitle}>5 Yearly (Periodic) Structural inspection (BCA)</Text>
     </View>
    </View>
  )
}

export default licenses

