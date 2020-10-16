import React from "react";
import { useQuery } from "react-query";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import * as api from "../api";
import Item from "../components/recipe-list/item";

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  textLikeButton: {
    color: "#007AFF",
    fontSize: 20,
    marginBottom: 10,
  },
  textButtons: {
    marginTop: 30,
    alignSelf: "center",
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
    <View>
      <Text style={styles.title}>{collection.title}</Text>

      {recipes.map((recipe) => (
        <Item recipe={recipe} key={recipe.id}></Item>
      ))}
      <View style={styles.textButtons}>
        <Link to={`/add-recipe/${collectionId}`} underlayColor="#f0f4f7">
          <Text style={styles.textLikeButton}>Add a Recipe</Text>
        </Link>
        <Link to="/" underlayColor="#f0f4f7">
          <Text style={styles.textLikeButton}>back to overview</Text>
        </Link>
      </View>
    </View>
  );
};

export default CollectionDetail;
