import React from "react";
import { useMutation, useQueryCache } from "react-query";
import * as api from "../../api";
import { useUser } from "../../service/user";
import CreateRecipeForm from "./form";

const CreateRecipe = () => {
  const user = useUser();
  const cache = useQueryCache();
  const [createRecipe] = useMutation(
    (recipe) => api.recipes.create({ ...recipe, owner: user }),
    {
      onSuccess: () => cache.invalidateQueries("recipes"),
    }
  );

  return (
    <CreateRecipeForm onSubmit={createRecipe}></CreateRecipeForm>
  );
};

export default CreateRecipe;
