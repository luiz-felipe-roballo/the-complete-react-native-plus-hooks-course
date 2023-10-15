import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    // { name: "Firend #1", key: "1" },
    // { name: "Firend #2", key: "2" },
    // { name: "Firend #3", key: "3" },
    // { name: "Firend #4", key: "4" },
    // { name: "Firend #5", key: "5" },
    // { name: "Firend #6", key: "6" },
    // { name: "Firend #7", key: "7" },
    // { name: "Firend #8", key: "8" },
    // { name: "Firend #9", key: "9" },

    { name: "Firend #1", age: 20 },
    { name: "Firend #2", age: 21 },
    { name: "Firend #3", age: 22 },
    { name: "Firend #4", age: 23 },
    { name: "Firend #5", age: 24 },
    { name: "Firend #6", age: 25 },
    { name: "Firend #7", age: 26 },
    { name: "Firend #8", age: 27 },
    { name: "Firend #9", age: 28 },
  ];

  return (
    <FlatList
      // horizontal={false}
      // showsVerticalScrollIndicator={false}

      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        // item -> { item: { name: "Friend: #1" }, index: 0 }
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
