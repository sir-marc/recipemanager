import React from "react";
import { Text, View, Button } from "react-native";
import { useBack } from "../service/utils/hooks/history";
import { useUser } from "../service/user";
import AddRecipeForm from "../components/create-recipe";
import Header from "../components/visual/header";

const AddRecipe = ({ match }) => {
  const goBack = useBack();
  return (
    <>
      <Header title="Create a Recipe" />
      <AddRecipeForm collection={match.params.collection} />
      <Button onPress={goBack} title="Back to collection"></Button>
    </>
  );
};

export default AddRecipe;
