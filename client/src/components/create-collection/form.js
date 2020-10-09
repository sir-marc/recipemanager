import React from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";

const emptyCollection = { title: "" };

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  input: {
    flexGrow: 2,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    padding: 5,
  },
});

const CreateCollectionForm = ({ onSubmit }) => {
  const [collection, setCollection] = React.useState(emptyCollection);
  const setTitle = (title) =>
    setCollection((collection) => ({ ...collection, title }));

  const handleSubmit = () => {
    setCollection(emptyCollection);
    onSubmit(collection);
  };
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={collection.title}
        onChangeText={setTitle}
      ></TextInput>
      <Button onPress={handleSubmit} title="Create"></Button>
    </View>
  );
};

export default CreateCollectionForm;
