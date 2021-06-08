import React from "react";
import { StyleSheet, View, Text, ThouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <ThouchableOpacity
      onPress={props.onDelete.bind(this, props.id)}
      activeOpacity={0.8}
      onPress={props.onDelete}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </ThouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
