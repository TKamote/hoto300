import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const technicalInfo = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Other Technical Information</Text>
      <Text style={styles.subtitle}>Network license, if applicable (IMDA)</Text>
      <Text style={styles.subtitle}>Cooling Tower Licences & Registration</Text>
      <Text style={styles.subtitle}>Walkie Talkie Licenses</Text>
      <Text style={styles.subtitle}>Structural Inspection/ Visual Inspection Certificate</Text>
      <Text style={styles.subtitle}>Generator Installation Certificates</Text>
      <Text style={styles.subtitle}>Legionella Testing Program</Text>
      <Text style={styles.subtitle}>
        "Heterotrophic Plate Count (HPC) Monthly report - formerly known as
        Standard Plate Count (SPC)"
      </Text>
      <Text style={styles.subtitle}>Trade Waste Agreements</Text>
      <Text style={styles.subtitle}>
        "Essential Services (Fire Doors / Exit Lights / Emergency Lights /
        Generator etc) Certificates"
      </Text>
      <Text style={styles.subtitle}>Sewer pipeline flushing / inspection records</Text>
      <Text style={styles.subtitle}>Declaration on Storm Water Drainage System"</Text>
      <Text style={styles.subtitle}>Water Quality Testing process and reports</Text>
      <Text style={styles.subtitle}>Gondola/ BMU Registration Summary</Text>
      <Text style={styles.subtitle}>
        Asset register detailing all the asset attributes for each sites
      </Text>
      <Text style={styles.subtitle}>Contact list for original equipment supplier/contractor</Text>
      <Text style={styles.subtitle}>Maintenance records/ History Cards for all Equipment</Text>
      <Text style={styles.subtitle}>Operating log sheets & Checklists along with Summary</Text>
      <Text style={styles.subtitle}>Emergency Contacts</Text>
      <Text style={styles.subtitle}>
        "Emergency Escalation matrix for all Mechanical, Electrical & Plumbing
        (MEP) equipments"
      </Text>
      <Text style={styles.subtitle}>Thermal scanning, PDM,DGA Analysis etc)</Text>
      <Text style={styles.subtitle}>Annual Electrical shut down report</Text>
      <Text style={styles.subtitle}>Planned Maintenance Schedule for the year</Text>
      <Text style={styles.subtitle}>Maintenance records/ History Cards for all Equipment</Text>
      <Text style={styles.subtitle}>M&E system Service Reports</Text>
      <Text style={styles.subtitle}>Hand over Client specific technology systems</Text>
      <Text style={styles.subtitle}>Mechanical Dry - Transformer</Text>
      <Text style={styles.subtitle}>Mechanical Wet - Transformer</Text>
      <Text style={styles.subtitle}>Life Safety Systems (LSS)</Text>
      <Text style={styles.subtitle}>Supplies / Spares</Text>
      <Text style={styles.subtitle}>Others e.g. Predictive Maintenance costs</Text>
      <Text style={styles.subtitle}>Warranty certificates for all systems (incl. DLP)</Text>
      <Text style={styles.subtitle}>Inventory list/ Critical Spare List</Text>
      <Text style={styles.subtitle}>Tools list for tools owned by Client</Text>
      <Text style={styles.subtitle}>Contact list for original equipment supplier/contractor</Text>
      <Text style={styles.subtitle}>Operating log sheets</Text>
      <Text style={styles.subtitle}>
        Fire System Maintenance (Alarms/ Sprinklers/ Pumps/ Detectors)
      </Text>
      <Text style={styles.subtitle}>Electrical Works Information</Text>
      <Text style={styles.subtitle}>Emergency Lighting</Text>
      <Text style={styles.subtitle}>Lighting - General</Text>
      <Text style={styles.subtitle}>Lighting - Control and Protection</Text>
      <Text style={styles.subtitle}>Carpark Management System</Text>
      <Text style={styles.subtitle}>Copies of all Scope of Work (for services listed above)</Text>
      <Text style={styles.subtitle}>Copies of all Standard Operating Procedures</Text>
      <Text style={styles.subtitle}>Copies of all Emergency Operating Procedures</Text>
      <Text style={styles.subtitle}>Copies of all BCP Procedures</Text>
      <Text style={styles.subtitle}>Status update of all pending works</Text>
      <Text style={styles.subtitle}>Current Schedule of Rates for ad-hoc Services</Text>
      <Text style={styles.subtitle}>List of equipment under DLP</Text>
    </View>
  );
};

export default technicalInfo;
