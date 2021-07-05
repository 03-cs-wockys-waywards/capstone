import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import interests from "./interestsArray";
import styles from "./styles";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text numberOfLines={1} style={[styles.title, textColor]}>{item}</Text>
  </TouchableOpacity>
);

export default function InterestsScreen() {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handlePress = (item) => {
    const curr = selectedInterests.includes(item) ? selectedInterests.filter((interest) => interest !== item) : [ ...selectedInterests, item ];
    setSelectedInterests(curr);
  }

  const renderItem = ({ item }) => {
    const backgroundColor = selectedInterests.includes(item) ? "#6e3b6e" : "#f9c2ff";
    const color = selectedInterests.includes(item) ? "white" : "black";

    return (
      <Item 
        item={item}
        onPress={() => handlePress(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={interests}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        extraData={selectedInterests}
        numColumns={2}
      />
    </SafeAreaView>
  );
}