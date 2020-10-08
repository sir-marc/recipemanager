import React from "react";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import { Button, Text, View } from "react-native";
import { Link } from "react-router-native";
import * as api from "../api";
import { useUser } from "../service/user";
import CreateCollection from "../components/create-collection";

const queryCache = new QueryCache();

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
        <View key={collection.id}>
          <Button title="D"></Button>
          <Link
            to={`/collection-detail/${collection.id}`}
            underlayColor="#f0f4f7"
          >
            <Text>{collection.title}</Text>
          </Link>
        </View>
      ))}
      <CreateCollection />
    </View>
  );
};

export default (props) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <Home {...props} />
  </ReactQueryCacheProvider>
);
