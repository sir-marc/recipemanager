import React from "react";
import { useQuery, useMutation, useQueryCache } from "react-query";
import { Text, View, Button } from "react-native";
import { useBack } from "../service/utils/hooks/history";
import * as api from "../api";
import RecipeForm from "../components/recipe-form";
import Header from "../components/visual/header";

const EditRecipe = ({ match }) => {
  const goBack = useBack();
  const cache = useQueryCache();
  const recipeId = match.params.id;
  const { isLoading, isError, data, error } = useQuery(
    ["recipe", recipeId],
    () => api.recipes.get(recipeId)
  );

  const [updateRecipe] = useMutation(
    (recipe) => api.recipes.update(recipeId, recipe),
    {
      onSuccess: () => {
        cache.invalidateQueries("recipes");
        goBack();
      },
    }
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <>
      <Header title="Edit your recipe"></Header>
      <RecipeForm
        onSubmit={updateRecipe}
        data={data}
        buttonTitle={"Update recipe"}
      ></RecipeForm>
      <Button onPress={goBack} title="Back to recipe"></Button>
    </>
  );
};

export default EditRecipe;
