import React from "react";
import { Button, Text, View } from "react-native";
import { Link } from "react-router-native";
import { useBack } from "../service/utils/hooks/history";

const RecipeDetail = ({ match }) => {
  const goBack = useBack();
  return (
    <View>
      <Text>Here comes the recipe details</Text>
      <Text>This is recipe with id: {match.params.id}</Text>
      <Link to={`/edit-recipe/${match.params.id}`} underlayColor="#f0f4f7">
        <Text>Edit this Recipe</Text>
      </Link>
      <Button onPress={goBack} title="Back to collection"></Button>
    </View>
  );
};

export default RecipeDetail;
