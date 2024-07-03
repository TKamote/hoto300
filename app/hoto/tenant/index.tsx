import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const tenant = () => {
  return (
    <View style={styles.container}>
     <Link style={styles.back} href="/hoto">Back to HOTO main page</Link>
      <Text style={styles.title}>Tenant Management</Text>
      <View>
        <Text style={styles.subtitle}>Tenant handing and taking over condition report</Text>
        <Text style={styles.subtitle}>"Tenancy Agreement (TA), if applicable"</Text>
        <Text style={styles.subtitle}>
          "Tenancy Agreement (TA) and Lease Agreement (LA) for each tenant
        </Text>
        <Text style={styles.subtitle}>Keys/ access to vacant tenant units</Text>
        <Text style={styles.subtitle}>List of outstanding issues brought up by tenant</Text>
        <Text style={styles.subtitle}>Records of meeting(s) or dialogue session(s) with tenants</Text>
        <Text style={styles.subtitle}>Surveyed floor plan of each tenant's unit</Text>
        <Text style={styles.subtitle}>
          "Copies and records of correspondence regarding all tenancy,
          maintenance and management (tenancy files)"
        </Text>
        <Text style={styles.subtitle}>"Technical provision to each tenant (office, retail, etc)</Text>
        <Text style={styles.subtitle}>
          - Tapping of chilled / condenser water (tonnage, meter reading,
          charges, meter location, etc)
        </Text>
        <Text style={styles.subtitle}>
          - Tapping of emergency power source (kw, charges, meter location, etc)
        </Text>
        <Text style={styles.subtitle}>- Tapping of normal power source (busbar, TPN, etc)</Text>
        <Text style={styles.subtitle}>- Tapping of normal power source (busbar, TPN, etc)</Text>
        <Text style={styles.subtitle}>- Tapping of diesel storage tank (charges, etc)</Text>
        <Text style={styles.subtitle}>- Tapping of water (location, meter)"</Text>
        <Text style={styles.subtitle}> "Tenant's Fit-Out information for each tenant</Text>
        <Text style={styles.subtitle}>- Authorities approval</Text>
        <Text style={styles.subtitle}>- As built drawings</Text>
        <Text style={styles.subtitle}>- Power budget</Text>
        <Text style={styles.subtitle}>- Renovation deposit</Text>
        <Text style={styles.subtitle}>
          - Nomination List (contact details of key personals, emergency contact
          during & after office hours, FW, etc)"
        </Text>
        <Text style={styles.subtitle}>
          "List of tools, equipment, safety equipment under JTC (e.g. safety
          cones)"
        </Text>
        <Text style={styles.subtitle}>Tenants' arrears management report, if applicable</Text>
        <Text style={styles.subtitle}>Tenants ' fitout submission records and status</Text>
        <Text style={styles.subtitle}>Tenancy and carpark information submission to IRAS</Text>
        <Text style={styles.subtitle}>
          "Tenants' servicing report (e.g. pest control, grease trap, kitchen
          exhaust duct)"
        </Text>
      </View>
    </View>
  );
};

export default tenant;
