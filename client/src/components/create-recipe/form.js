import React from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";

const emptyRecipe = { title: "" };
const styles = StyleSheet.create({
  recipeForm: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 50,
    marginBottom: 5,
  },
  recipeInput: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dashed",
    padding: 5,
    textAlignVertical: 'top',
    fontSize: 16,
    width: 300,
    height: 250
  }
});
const CreateRecipeForm = ({ onSubmit }) => {
  const [recipe, setRecipe] = React.useState(emptyRecipe);
  const setTitle = (title) =>
    setRecipe((recipe) => ({ ...recipe, title }));

  const handleSubmit = () => {
    setRecipe(emptyRecipe);
    onSubmit(recipe);
  };
  return (
    <View style={styles.recipeForm}>
      <TextInput style={styles.recipeInput} value={recipe.title} onChangeText={setTitle} placeholder="Add your recipe Here" numberOfLines={10} multiline={true} ></TextInput>
      <Button onPress={handleSubmit} title="Create Your Recipe"></Button>
    </View>
  );
};

export default CreateRecipeForm;
