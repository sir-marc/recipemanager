import React from "react";
import { useMutation, useQueryCache } from "react-query";
import * as api from "../../api";
import { useUser } from "../../service/user";
import CreateCollectionForm from "./form";

const CreateCollection = () => {
  const user = useUser();
  const cache = useQueryCache();
  const [createCollection] = useMutation(
    (collection) => api.collections.create({ ...collection, owner: user }),
    {
      onSuccess: () => cache.invalidateQueries("collections"),
    }
  );

  return (
    <CreateCollectionForm onSubmit={createCollection}></CreateCollectionForm>
  );
};

export default CreateCollection;
