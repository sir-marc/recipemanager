import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useMutation } from "react-query";
import { Link } from "react-router-native";
import * as api from "../../api";
import queryCache from "../../cache";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 2,
  },
});

function RecipeItem({ recipe }) {
  const [deleteRecipe] = useMutation(api.recipes.delete, {
    onSuccess: (p) => {
      queryCache.invalidateQueries("recipes");
    },
  });
  return (
    <View style={styles.screen}>
      <Link to={`/recipe-detail/${recipe.id}`} underlayColor="#f0f4f7">
        <Text>{recipe.title}</Text>
      </Link>
      <Icon name="delete" onPress={() => deleteRecipe(recipe.id)} />
    </View>
  );
}

export default RecipeItem;
