import React from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";

const emptyCollection = { title: "" };

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    flexGrow: 2,
    borderWidth: 1,
    borderColor: "#dedede",
    borderStyle: "solid",
    padding: 10,
    fontSize: 16,
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
        placeholder="New collection"
      ></TextInput>
      <Button onPress={handleSubmit} title="Create"></Button>
    </View>
  );
};

export default CreateCollectionForm;
