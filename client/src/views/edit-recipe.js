import React from "react";
import { Text, View, Button } from "react-native";
import { useBack } from "../service/utils/hooks/history";

const EditRecipe = () => {
  const goBack = useBack();
  return (
    <View>
      <Text>Here you will be able to edit a recipe</Text>
      <Button onPress={goBack} title="Back to recipe"></Button>
    </View>
  );
};

export default EditRecipe;
