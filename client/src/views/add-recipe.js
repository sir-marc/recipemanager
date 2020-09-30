import React from "react";
import { Text, View, Button } from "react-native";
import { useBack } from "../service/utils/hooks/history";

const AddRecipe = () => {
  const goBack = useBack();
  return (
    <View>
      <Text>Here you will be able to add a recipe</Text>
      <Button onPress={goBack} title="Back to collection"></Button>
    </View>
  );
};

export default AddRecipe;
