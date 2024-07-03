import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text, ScrollView } from "react-native";

const fsdoc = () => {
    return (
        <View style={styles.container}>
            <Link style={styles.back} href="/hoto/fsafety">Back to Safety</Link>
            <Text style={styles.title}>SCDF Form </Text>
            <Text style={styles.title}>
                Fire Certificate Form with Annexes A-1 and A-2
            </Text>
            <ScrollView>
                <View>
                    <Text style={styles.subtitle}>Air-conditioning System</Text>
                    <Text style={styles.subtitle}>Atrium Smoke Control System</Text>
                    <Text style={styles.subtitle}>Automatic Fire Alarm System </Text>
                    <Text style={styles.subtitle}>Automatic Sprinkler System</Text>
                    <Text style={styles.subtitle}>Car Park Smoke Extract System</Text>
                    <Text style={styles.subtitle}>
                        Compartmentation Doors: Fire-rated doors linked to the fire alarm
                        system
                    </Text>
                    <Text style={styles.subtitle}>Dry Rising System</Text>
                    <Text style={styles.subtitle}>Ductless Jet Fan Systems</Text>
                    <Text style={styles.subtitle}>Engineered Smoke Control System</Text>
                    <Text style={styles.subtitle}>
                        Exit Doors Linked to Fire Alarm System: May use electro-mechanical
                        locking devices{" "}
                    </Text>
                    <Text style={styles.subtitle}>Exit Sign & Emergency Lighting</Text>
                    <Text style={styles.subtitle}>
                        External Fire Fighting Access Opening
                    </Text>
                    <Text style={styles.subtitle}>Fire Door & Exit Door </Text>
                    <Text style={styles.subtitle}>Hose Reels System (Without Pump) </Text>
                    <Text style={styles.subtitle}>Hose Reels System (With Pump) </Text>
                    <Text style={styles.subtitle}>Lift / Fire Lift Systems </Text>
                    <Text style={styles.subtitle}>Manual Fire Alarm System </Text>
                    <Text style={styles.subtitle}>
                        Passive Fire Protection: Includes fire-resistant materials like
                        structural steel, drywall, fire-retardant paint, and firestop for
                        duct risers
                    </Text>
                    <Text style={styles.subtitle}>
                        Persons with Disabilities (PWD) Communication Device & Visual Alarm
                        System
                    </Text>
                    <Text style={styles.subtitle}>Portable Fire Extinguisher</Text>
                    <Text style={styles.subtitle}>Pressurization System </Text>
                    <Text style={styles.subtitle}>Private Hydrant (Without Pump)</Text>
                    <Text style={styles.subtitle}>Private Hydrant (Dry) </Text>
                    <Text style={styles.subtitle}>Private Hydrant (With Pump) </Text>
                    <Text style={styles.subtitle}>Standby Generator Set </Text>
                    <Text style={styles.subtitle}>Voice Communication System </Text>
                    <Text style={styles.subtitle}>Water Mist Systems</Text>
                    <Text style={styles.subtitle}>Wet Rising System</Text>
                    <Text style={styles.subtitle}>
                        Others: E.g., Gas Suppression System (please specify){" "}
                    </Text>
                    <Text>(Test) DRY RISING SYSTEM (IF APPLICABLE) </Text>
                    <Text>(Test) WET RISING SYSTEM (IF APPLICABLE
                        </Text>
                    <Text>(Test) PRESURRISED STAIRCASES (IF APPLICABLE)
                    </Text>
                    <Text>(Test) HYDRANT (IF APPLICABLE)</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default fsdoc;
