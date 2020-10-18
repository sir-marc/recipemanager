import React from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";

const emptyRecipe = { title: "", instructions: "" };
const styles = StyleSheet.create({
  recipeForm: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 5,
    width: "80%",
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "#dedede",
    padding: 10,
    textAlignVertical: "top",
    fontSize: 16,
    marginBottom: 10,
    width: "100%",
  },
  instructionInput: {
    borderWidth: 1,
    borderColor: "#dedede",
    padding: 5,
    textAlignVertical: "top",
    fontSize: 16,
    width: "100%",
    height: 250,
  },
});

const CreateRecipeForm = ({
  onSubmit,
  data = emptyRecipe,
  buttonTitle = "Create Recipe",
}) => {
  const [recipe, setRecipe] = React.useState(data);
  const setTitle = (title) => setRecipe((recipe) => ({ ...recipe, title }));
  const setInstructions = (instructions) =>
    setRecipe((recipe) => ({ ...recipe, instructions }));

  const handleSubmit = () => {
    onSubmit(recipe);
  };
  return (
    <View style={styles.recipeForm}>
      <TextInput
        style={styles.titleInput}
        value={recipe.title}
        onChangeText={setTitle}
        placeholder="Recipe title"
      ></TextInput>
      <TextInput
        style={styles.instructionInput}
        value={recipe.instructions}
        onChangeText={setInstructions}
        placeholder="Add your instruction Here"
        numberOfLines={10}
        multiline={true}
      ></TextInput>
      <Button onPress={handleSubmit} title={buttonTitle}></Button>
    </View>
  );
};

export default CreateRecipeForm;
