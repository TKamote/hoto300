import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.hoto}>
        <Text style={styles.hototitle}>Handing Over Taking Over (HOTO)</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Application Main Page</Text>
        <Link style={styles.subtitle} href="/hoto">
          Go to Main HOTO Page
        </Link>
        {/* <Text style={styles.future}>Safety Audit</Text>
        <Text style={styles.future}>IMS Audit</Text>
        <Text style={styles.future}>Defect Management</Text>
        <Text style={styles.future}>FSM Plus</Text>
        <Text style={styles.future}>Lifecyle Assessment</Text>
        <Text style={styles.future}>M & E Resiliency</Text>
        <Text style={styles.future}>Safety Hazard identifications</Text>
        <Text style={styles.future}></Text>
        <Text></Text> */}
      </View>
    </View>
  );
}

const COLORS = {
  midnight: '#131E29',
  space: '#003E51',
  sand: '#EOC6AD',
  red: '#E30613',
  ocean: '#BCDEE6',
  white: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 2,
  },
  hoto: {
    backgroundColor: COLORS.midnight,
    color: COLORS.white,
    borderRadius: 5,
  },
  hototitle: {
    color: COLORS.white,
    fontSize: 24,
    textAlign: "center",
    fontWeight: '700',
    padding: 5,
    paddingHorizontal: 35,

  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    backgroundColor: "E131E29",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E30613",
  },
  subtitle: {
    fontSize: 20,
    color: "#131E29",
    textAlign: "center",
  },
  future: {
    fontSize: 11,
    color: "#131E29",
    textAlign: "center",
  }
});
