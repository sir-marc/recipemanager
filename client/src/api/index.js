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
    }).then((res) => {
      return res;
    });
  },
};