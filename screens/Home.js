import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import TodoList from "../components/TodoList";
import todosData from "../data/todosData";

export default function Home() {
  const [localData, setLocalData] = useState(
    todosData.sort((a, b) => a.isCompleted - b.isCompleted)
  );
  const [isHidden, setIsHidden] = useState(false);

  const handleHidePress = () => {
    console.log(isHidden);
    if (isHidden) {
      setLocalData(todosData.sort((a, b) => a.isCompleted - b.isCompleted));
    } else {
      setLocalData(localData.filter((todo) => !todo.isCompleted));
    }
    setIsHidden(!isHidden);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/300" }} style={styles.pic} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={handleHidePress}>
          <Text style={{ color: "#3478f6" }}>
            {isHidden ? "Show Completed" : "Hide Completed"}
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData={localData.filter((todo) => todo.isToday)} />

      <Text style={styles.title}>Tomorrow</Text>
      <TodoList todosData={localData.filter((todo) => !todo.isToday)} />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.textPlus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  addButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  textPlus: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -6,
    left: 9,
  },
});
