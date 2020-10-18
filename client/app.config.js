export default ({ config }) => ({
  expo: {
    ...config,
    extra: {
      BACKEND_URL: "https://recipe-manager-291520.appspot.com",
    },
  },
});
