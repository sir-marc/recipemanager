import React from "react";
import { Button, View, TextInput } from "react-native";

const emptyCollection = { title: "" };

const CreateCollectionForm = ({ onSubmit }) => {
  const [collection, setCollection] = React.useState(emptyCollection);
  const setTitle = (title) =>
    setCollection((collection) => ({ ...collection, title }));

  const handleSubmit = () => {
    setCollection(emptyCollection);
    onSubmit(collection);
  };
  return (
    <View>
      <TextInput value={collection.title} onChangeText={setTitle}></TextInput>
      <Button onPress={handleSubmit} title="Create"></Button>
    </View>
  );
};

export default CreateCollectionForm;
