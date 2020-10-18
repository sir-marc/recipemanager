import React from "react";
import { useMutation } from "react-query";
import * as api from "../../api";
import queryCache from "../../cache";
import ListItem from "../visual/list-item";

function RecipeItem({ recipe }) {
  const [deleteRecipe] = useMutation(api.recipes.delete, {
    onSuccess: (p) => {
      queryCache.invalidateQueries("recipes");
    },
  });

  return (
    <ListItem
      onDelete={() => deleteRecipe(recipe.id)}
      link={`/recipe-detail/${recipe.id}`}
      title={recipe.title}
    />
  );
}

export default RecipeItem;
