import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 2,
    shadowColor: "#000",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  collectionTitle: {
    fontSize: 16,
  },
});

function ListItem({ onDelete, link, title }) {
  return (
    <View style={styles.item}>
      <Link to={link} underlayColor="#f0f4f7">
        <Text style={styles.collectionTitle}>{title}</Text>
      </Link>
      <Icon name="delete" onPress={onDelete} />
    </View>
  );
}

export default ListItem;
