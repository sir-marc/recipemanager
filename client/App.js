import { NativeRouter, Route, Switch, BackButton } from "react-router-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserProvider, useUser } from "./src/service/user";
import Home from "./src/views/home";
import CollectionDetail from "./src/views/collection-detail";
import RecipeDetail from "./src/views/recipe-detail";
import EditRecipe from "./src/views/edit-recipe";
import AddRecipe from "./src/views/add-recipe";
import { ReactQueryCacheProvider } from "react-query";
import queryCache from "./src/cache";

function App() {
  const user = useUser();
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <NativeRouter>
        <BackButton>
          <View style={styles.container}>
            <Text>{user}</Text>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/collection-detail/:id"
                component={CollectionDetail}
              />
              <Route path="/recipe-detail/:id" component={RecipeDetail} />
              <Route path="/add-recipe/:collection" component={AddRecipe} />
              <Route path="/edit-recipe/:id" component={EditRecipe} />
              <Route component={Home} />
            </Switch>
          </View>
        </BackButton>
      </NativeRouter>
    </ReactQueryCacheProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 80,
  },
});

export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
