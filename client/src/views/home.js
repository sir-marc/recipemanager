import React from "react";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import * as api from "../api";
import { useUser } from "../service/user";
import CreateCollection from "../components/create-collection";
import Item from "../components/collection-list/item";

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
});

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
      <Text style={styles.title}>Your Collections</Text>
      <CreateCollection />
      {data.map((collection) => (
        <Item key={collection.id} collection={collection} />
      ))}
    </View>
  );
};

export default Home;
