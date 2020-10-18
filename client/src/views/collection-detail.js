import React from "react";
import { useQuery } from "react-query";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import * as api from "../api";
import Item from "../components/recipe-list/item";
import Header from "../components/visual/header";
import Container from "../components/visual/container";

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
  textLikeButton: {
    color: "#007AFF",
    fontSize: 20,
  },
  textButtons: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

const CollectionDetail = ({ match }) => {
  const collectionId = match.params.id;

  const {
    isLoading: recipesAreLoading,
    isError: recipesHadError,
    data: recipes,
    error: recipeError,
  } = useQuery(["recipes", collectionId], () =>
    api.recipes.fetchAllPerCollection(collectionId)
  );

  const {
    isLoading: collectionIsLoading,
    isError: collectionHadError,
    data: collection,
    error: collectionError,
  } = useQuery(["collection", collectionId], () =>
    api.collections.get(collectionId)
  );

  if (collectionIsLoading || recipesAreLoading) {
    return <Text>Loading...</Text>;
  }

  if (collectionHadError) {
    return <Text>Error: {collectionError.message}</Text>;
  }
  if (recipesHadError) {
    return <Text>Error: {recipeError.message}</Text>;
  }

  return (
    <>
      <Header title={collection.title} />
      <Container>
        <View style={styles.textButtons}>
          <Link to="/" underlayColor="#f0f4f7">
            <Text style={styles.textLikeButton}>Back</Text>
          </Link>
          <Link to={`/add-recipe/${collectionId}`} underlayColor="#f0f4f7">
            <Text style={styles.textLikeButton}>Add a Recipe</Text>
          </Link>
        </View>
        {recipes.map((recipe) => (
          <Item recipe={recipe} key={recipe.id}></Item>
        ))}
      </Container>
    </>
  );
};

export default CollectionDetail;
