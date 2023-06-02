import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const changeHandlerDescription = (val) => {
    setDescription(val);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        style={styles.input}
        placeholder="New todo"
        onChangeText={changeHandler}
      />
      <TextInput
        style={styles.description}
        placeholder="Description"
        multiline={true}
        onChangeText={changeHandlerDescription}
      />
      <Button
        onPress={() => {
          submitHandler(text, description);
        }}
        title="Add todo"
        color="#008080"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    width: 300,
    backgroundColor: "white",
  },
  description: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    width: 300,
    height: 100,
    backgroundColor: "white",
  },
});
