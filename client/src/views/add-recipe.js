import React from "react";
import { Text, View, Button } from "react-native";
import { useBack } from "../service/utils/hooks/history";
import { useUser } from "../service/user";
import AddRecipeForm from "../components/create-recipe";

const AddRecipe = ({ match }) => {
  const goBack = useBack();
  return (
    <View>
      <AddRecipeForm collection={match.params.collection} />
      <Button onPress={goBack} title="Back to collection"></Button>
    </View>
  );
};

export default AddRecipe;
