import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "../components/AddTodo";

export default function AddSceen({ navigation, route }) {
  const submitHandler = (text, description) => {
    const key = Math.random().toString();
    const time = new Date().toJSON().slice(0, 10);
    navigation.navigate("Home", {
      newTodo: {
        text: text,
        description: description,
        key: key,
        time: time,
      },
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AFEEEE",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
