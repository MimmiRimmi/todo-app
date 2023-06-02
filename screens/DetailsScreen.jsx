import { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function DetailsScreen({ navigation, route }) {
  const { item, deleteTodo } = route.params;

  const pressHandler = () => {
    deleteTodo(item.key);
    navigation.navigate("Home");
  };

  useEffect(() => {
    navigation.setOptions({ title: item.text });
  }, [route]);

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text>{item.description}</Text>
      </View>
      <View style={styles.button}>
        <Button title="Klar" onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.footer}>
        <Text>{item.time}</Text>
        <AntDesign
          name="delete"
          size={28}
          color="#333"
          onPress={() => {
            pressHandler();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#AFEEEE",
  },
  description: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingTop: 40,
  },
  footer: {
    flex: 1,
    padding: 40,
    flexDirection: "row",
    alignItems: "flex-end",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
});
