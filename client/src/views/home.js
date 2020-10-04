import React from "react";
import { useQuery } from "react-query";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import * as api from "../api";
import { useUser } from "../service/user";

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
        <Link
          key={collection.id}
          to={`/collection-detail/${collection.id}`}
          underlayColor="#f0f4f7"
        >
          <Text>{collection.title}</Text>
        </Link>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default Home;
