import React from "react";
import { Button, Text, View } from "react-native";
import { useMutation } from "react-query";
import { Link } from "react-router-native";
import * as api from "../../api";
import queryCache from "../../cache";

function RecipeItem({ recipe }) {
  const [deleteRecipe] = useMutation(api.recipes.delete, {
    onSuccess: (p) => {
      queryCache.invalidateQueries("recipes");
    },
  });
  return (
    <View>
      <Button onPress={() => deleteRecipe(api.recipes.id)} title="D"></Button>
      <Link to={`/recipe-detail/${recipe.id}`} underlayColor="#f0f4f7">
        <Text>{recipe.title}</Text>
      </Link>
    </View>
  );
}

export default RecipeItem;
