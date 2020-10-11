import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useMutation } from "react-query";
import { Link } from "react-router-native";
import * as api from "../../api";
import queryCache from "../../cache";
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 2,
    
  },
});

function Item({ collection }) {
  const [deleteRecipe] = useMutation(api.collections.delete, {
    onSuccess: (p) => {
      queryCache.invalidateQueries("collections");
    },
  });
  return (
    <View style={styles.item}>
      <Link to={`/collection-detail/${collection.id}`} underlayColor="#f0f4f7">
        <Text>{collection.title}</Text>
      </Link>
      <Icon name='delete' onPress={()=> deleteRecipe(collection.id)}/>
    </View>
  );
}

export default Item;
