import React, { useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { EmptyCircle, FilledCircle } from "../../../components/ProgressCircles";
import interests from "./interestsArray";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { editUserInfo } from "../../../store/userReducer";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.itemName, textColor]}>{item}</Text>
  </TouchableOpacity>
);

export default function InterestsScreen({ navigation }) {
  const user = useSelector((state) => state.user);
  const init = user.interests.length ? user.interests : [];
  const [selectedInterests, setSelectedInterests] = useState(init);
  const dispatch = useDispatch();

  const handlePress = (item) => {
    if (selectedInterests.includes(item)) {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest !== item)
      );
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, item]);
    }
  };

  const navigateToNext = () => {
    if (selectedInterests.length) {
      dispatch(editUserInfo({ interests: selectedInterests }));
      navigation.navigate("ProfileStepThree");
    }
  };

  const renderItem = ({ item }) => {
    const backgroundColor = selectedInterests.includes(item)
      ? "#6e3b6e"
      : "#f9c2ff";
    const color = selectedInterests.includes(item) ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => handlePress(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>What are your interests?</Text>
        <Text style={styles.headerText}>
          Choose up to 5 options ➨ {selectedInterests.length}/5
        </Text>
      </View>
      <FlatList
        data={interests}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        extraData={selectedInterests}
        numColumns={2}
      />
      <View style={styles.progressContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileStepOne")}>
          <Icon type="font-awesome" name="chevron-left" color="#000" />
        </TouchableOpacity>
        <FilledCircle />
        <FilledCircle />
        <EmptyCircle />
        <EmptyCircle />
        <TouchableOpacity onPress={navigateToNext}>
          <Icon type="font-awesome" name="chevron-right" color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
