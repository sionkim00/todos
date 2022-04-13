import React from "react";
import todosData from "../data/todosData";
import { FlatList, View, Text, StyleSheet } from "react-native";
import Todo from "./Todo";

export default function TodoList({ todosData }) {
  return (
    <FlatList
      data={todosData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} />}
    />
  );
}

const styles = StyleSheet.create({});
