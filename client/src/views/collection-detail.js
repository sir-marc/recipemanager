import React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

const CollectionDetail = ({ match }) => (
  <View>
    <Text>Here comes the recipe collection containing all recipes</Text>
    <Text>This is collection with id: {match.params.id}</Text>
    <Link to="/recipe-detail/98765" underlayColor="#f0f4f7">
      <Text>Link to Recipe</Text>
    </Link>
    <Link to="/add-recipe" underlayColor="#f0f4f7">
      <Text>Add a Recipe</Text>
    </Link>
    <Link to="/" underlayColor="#f0f4f7">
      <Text>back to overview</Text>
    </Link>
  </View>
);

export default CollectionDetail;
