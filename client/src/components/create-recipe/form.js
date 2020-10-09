import React from "react";
import { Button, View, TextInput } from "react-native";

const emptyRecipe = { title: "" };

const CreateRecipeForm = ({ onSubmit }) => {
  const [recipe, setRecipe] = React.useState(emptyRecipe);
  const setTitle = (title) =>
    setRecipe((recipe) => ({ ...recipe, title }));

  const handleSubmit = () => {
    setRecipe(emptyRecipe);
    onSubmit(recipe);
  };
  return (
    <View>
      <TextInput value={recipe.title} onChangeText={setTitle}></TextInput>
      <Button onPress={handleSubmit} title="Create"></Button>
    </View>
  );
};

export default CreateRecipeForm;
