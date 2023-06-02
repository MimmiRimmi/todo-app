import { StyleSheet, View, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";
import { LogBox } from "react-native";

export default function AddSceen({ navigation, route }) {
  useEffect(() => {
    if (route?.params?.newTodo) {
      setTodos([...todos, route.params.newTodo]);
      navigation.setParams({ ...route.params, newTodo: null });
    }
  }, [navigation, route?.params?.newTodo]);

  const deleteTodo = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const [todos, setTodos] = useState([]);

  LogBox.ignoreAllLogs();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteTodo={deleteTodo} />
            )}
            ListEmptyComponent={
              <View style={styles.listEmptyContainer}>
                <Text style={styles.listEmptyText}>Add a todo...</Text>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AFEEEE",
  },
  listEmptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listEmptyText: {
    fontSize: 18,
    color: "#8baaaa",
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
