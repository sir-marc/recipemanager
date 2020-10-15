import Constants from "expo-constants";

export const BACKEND_URL = Constants.manifest.extra.BACKEND_URL;
export const API_URL = `${BACKEND_URL}/rest`;

export const COLLECTIONS = `${API_URL}/collections`;
export const RECIPES = `${API_URL}/recipes`;

const singleTransformer = (obj) => ({ id: obj.key.id, ...obj.properties });
const listTransformer = (list) => list.map(singleTransformer);

export const collections = {
  fetchAllPerUser: (user) => {
    return fetch(`${COLLECTIONS}?owner=${user}`)
      .then((res) => res.json())
      .then(listTransformer);
  },
  create: (collection) => {
    return fetch(COLLECTIONS, {
      method: "POST",
      body: JSON.stringify(collection),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
  delete: (id) => {
    return fetch(`${COLLECTIONS}/${id}`, {
      method: "DELETE",
    });
  },
  update: (id, collection) => {
    return fetch(`${COLLECTIONS}/${id}`, {
      method: "PUT",
      body: JSON.stringify(collection),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
  get: (id) => {
    return fetch(`${COLLECTIONS}/${id}`)
      .then((res) => res.json())
      .then(singleTransformer);
  },
};

export const recipes = {
  fetchAllPerCollection: (collection) => {
    return fetch(`${RECIPES}?collection=${collection}`)
      .then((res) => res.json())
      .then(listTransformer);
  },
  create: (recipe) => {
    return fetch(RECIPES, {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
  delete: (id) => {
    return fetch(`${RECIPES}/${id}`, {
      method: "DELETE",
    });
  },
  update: (id, recipe) => {
    return fetch(`${RECIPES}/${id}`, {
      method: "PUT",
      body: JSON.stringify(recipe),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
  get: (id) => {
    return fetch(`${RECIPES}/${id}`)
      .then((res) => res.json())
      .then(singleTransformer);
  },
};
