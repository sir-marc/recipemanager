import React from "react";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import { Button, Text, View } from "react-native";
import { Link } from "react-router-native";
import * as api from "../api";
import { useUser } from "../service/user";
import CreateCollection from "../components/create-collection";
import Item from "../components/collection-list/item";

const Home = () => {
  const user = useUser();
  const { isLoading, isError, data, error } = useQuery("collections", () =>
    api.collections.fetchAllPerUser(user)
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <Text>Here comes the home screen with a list of collections</Text>
      {data.map((collection) => (
        <Item key={collection.id} collection={collection} />
      ))}
      <CreateCollection />
    </View>
  );
};

export default Home;
