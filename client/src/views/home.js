import React from "react";
import { useQuery } from "react-query";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as api from "../api";
import { useUser } from "../service/user";
import CreateCollection from "../components/create-collection";
import Item from "../components/collection-list/item";
import Header from "../components/visual/header";
import Container from "../components/visual/container";

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
    <>
      <Header title={"Your collections"} />
      <Container>
        <CreateCollection />
        {data.map((collection) => (
          <Item key={collection.id} collection={collection} />
        ))}
      </Container>
    </>
  );
};

export default Home;
