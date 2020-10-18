import React from "react";
import { useQuery } from "react-query";
import { Button, Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { useBack } from "../service/utils/hooks/history";
import * as api from "../api";
import Header from "../components/visual/header";
import Container from "../components/visual/container";

const styles = StyleSheet.create({
  buttons: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  textLikeButton: {
    color: "#007AFF",
    fontSize: 18,
  },
  instructions: {
    fontSize: 16,
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
    <>
      <Header title={data.title} />
      <Container>
        <View style={styles.buttons}>
          <Button onPress={goBack} title="Back"></Button>
          <Link to={`/edit-recipe/${recipeId}`} underlayColor="#f0f4f7">
            <Text style={styles.textLikeButton}>Edit this Recipe</Text>
          </Link>
        </View>
        <Text style={styles.instructions}>{data.instructions}</Text>
      </Container>
    </>
  );
};

export default RecipeDetail;
