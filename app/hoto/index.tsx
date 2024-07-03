import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const data = [
  {
    id: "1",
    title: "Section 1 - Regulatory Requirements",
    href: "./licenses",
  },
  {
    id: "2",
    title: "Section 2 - As Built Drawings",
    href: "./asbuilt",
  },
  {
    id: "3",
    title: "Section 3 - Operations and Maintenance Manual",
    href: "./omm",
  },
  {
    id: "4",
    title: "Section 4 - Good Practice (CP / SS, etc",
    href: "./sstandard",
  },
  {
    id: "5",
    title: "Section 5 - Fire Safety Documents",
    href: "./fsafety",
  },
  {
    id: "6",
    title: "Section 6 - Integrated Management Systems",
    href: "./ims",
  },
  {
    id: "7",
    title: "Section 7 - Technical Information",
    href: "./technicalInfo",
  },
  {
    id: "8",
    title: "Section 8 - EH&S General",
    href: "./ehs-general",
  },
  {
    id: "9",
    title: "Section 9 - Operations",
    href: "./operation",
  },
  {
    id: "10",
    title: "Section 10 - Utilities",
    href: "./utilities",
  },
  {
    id: "11",
    title: "Section 11 - Subcontractors",
    href: "./meSubContracts",
  },
  {
    id: "12",
    title: "Section 12 - Soft Services",
    href: "./softServices",
  },
  {
    id: "13",
    title: "Section 13 - Tenant Management",
    href: "./tenant",
  },
];

const Index = () => {
  function renderItem({ item }) {
    return (
      <Link style={styles.sectionlink} href={item.href}>
        {item.title}
      </Link>
    );
  }
  return (
    <View style={styles.container}>
      <Link style={styles.applink} href="/">
        APP Main Page
      </Link>
      <Text style={styles.title}>
        Guide for Handing Over Taking Over of a Property or Contract
      </Text>
      <Text style={styles.link}>
        Click on each section below to see the items that you have to look into
        if applicable or not in the site that we are taking over. Newly built
        property or existing. This applies for most type of buiding including
        industrial.
      </Text>
      <ScrollView style={styles.section}>
        {data.map((item) => (
          <React.Fragment key={item.id.toString()}>
            <Link style={styles.sectionlink} href={item.href}>
              {item.title}
            </Link>
          </React.Fragment>
        ))}
      </ScrollView>
      <Text style={styles.item}>
        <Text style={styles.david}>Disclaimer:</Text> This prototype application is for demonstration and testing
        only. The content, including text, images, and data, is provisional and
        subject to change. The design and styling are also in early development
        stages and will be significantly modified. Users are advised that this
        version may contain inaccuracies or errors and should not be relied upon
        for serious use cases. Feedback on functionality, content, and design is
        welcome and will guide future development. Please understand that this
        is a work in progress. Thank you.
      </Text>
    </View>
  );
};

export default Index;

const COLORS = {
  midnight: "#131E29",
  space: "#003E51",
  sand: "#EOC6AD",
  red: "#E30613",
  ocean: "#BCDEE6",
  white: "#fff",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.space,
    marginTop: 10,
    margin: 5,
    height: "100%",
    paddingLeft: 5,
    paddingTop: 8,
  },
  title: {
    fontSize: 17,
    marginBottom: 3,
    color: COLORS.white,
  },
  link: {
    fontWeight: "400",
    fontSize: 14,
    color: COLORS.white,
    paddingBottom: 10,
    paddingTop: 5,
  },
  applink: {
    color: COLORS.ocean,
    fontSize: 14,
    marginBottom: 5,
  },
  section: {
    backgroundColor: COLORS.red,
    paddingTop: 5,
    paddingBottom: 15,
  },
  sectionlink: {
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 2,
    color: COLORS.white,
  },
  item: {
    color: COLORS.white,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 3,
    fontSize: 11,
  },
  david: {
    fontSize: 13,
    fontWeight: 700,
  },
});
