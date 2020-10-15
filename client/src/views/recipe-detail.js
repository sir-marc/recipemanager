import React from "react";
import { useQuery } from "react-query";
import { Button, Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { useBack } from "../service/utils/hooks/history";
import * as api from "../api";

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
});

const RecipeDetail = ({ match }) => {
  const goBack = useBack();
  const recipeId = match.params.id;
  const { isLoading, isError, data, error } = useQuery(
    ["recipe", recipeId],
    () => api.recipes.get(recipeId)
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <Text style={styles.title}>{data.title}</Text>
      <Text>{data.instructions}</Text>
      <Link to={`/edit-recipe/${recipeId}`} underlayColor="#f0f4f7">
        <Text>Edit this Recipe</Text>
      </Link>
      <Button onPress={goBack} title="Back to collection"></Button>
    </View>
  );
};

export default RecipeDetail;
