import React from "react";
import { Button, Text, View } from "react-native";
import { useMutation } from "react-query";
import { Link } from "react-router-native";
import * as api from "../../api";
import queryCache from "../../cache";

function Item({ collection }) {
  const [deleteRecipe] = useMutation(api.collections.delete, {
    onSuccess: (p) => {
      queryCache.invalidateQueries("collections");
    },
  });
  return (
    <View>
      <Button onPress={() => deleteRecipe(collection.id)} title="D"></Button>
      <Link to={`/collection-detail/${collection.id}`} underlayColor="#f0f4f7">
        <Text>{collection.title}</Text>
      </Link>
    </View>
  );
}

export default Item;
