import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const Home = () => (
  <View>
    <Text>Here comes the home screen with a list of collections</Text>
    <Link to="/collection-detail/12345" underlayColor="#f0f4f7">
      <Text>Link to collection</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default Home;
