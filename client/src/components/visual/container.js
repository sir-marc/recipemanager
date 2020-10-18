import React from "react";
import { StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  container: { width: "80%" },
});

const Container = (props) => <View style={style.container} {...props}></View>;

export default Container;
