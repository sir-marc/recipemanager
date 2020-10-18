import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import heroImg from "../../assets/hero.jpg";

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    backgroundColor: "indianred",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  heroImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

const Header = ({ title }) => (
  <View style={styles.header}>
    <ImageBackground source={heroImg} style={styles.heroImg}></ImageBackground>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Header;
