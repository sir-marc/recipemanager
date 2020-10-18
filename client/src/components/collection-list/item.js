import React from "react";
import { useMutation } from "react-query";
import * as api from "../../api";
import queryCache from "../../cache";
import ListItem from "../visual/list-item";

function Item({ collection }) {
  const [deleteRecipe] = useMutation(api.collections.delete, {
    onSuccess: (p) => {
      queryCache.invalidateQueries("collections");
    },
  });

  return (
    <ListItem
      onDelete={() => deleteRecipe(collection.id)}
      title={collection.title}
      link={`/collection-detail/${collection.id}`}
    />
  );
}

export default Item;
