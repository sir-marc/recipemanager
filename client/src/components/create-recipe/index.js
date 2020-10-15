import React from "react";
import { useMutation, useQueryCache } from "react-query";
import * as api from "../../api";
import { useUser } from "../../service/user";
import { useBack } from "../../service/utils/hooks/history";
import CreateRecipeForm from "../recipe-form";

const CreateRecipe = ({ collection }) => {
  const user = useUser();
  const cache = useQueryCache();
  const goBack = useBack();
  const [createRecipe] = useMutation(
    (recipe) => api.recipes.create({ ...recipe, collection, owner: user }),
    {
      onSuccess: () => {
        cache.invalidateQueries("recipes");
        goBack();
      },
    }
  );

  return <CreateRecipeForm onSubmit={createRecipe}></CreateRecipeForm>;
};

export default CreateRecipe;
