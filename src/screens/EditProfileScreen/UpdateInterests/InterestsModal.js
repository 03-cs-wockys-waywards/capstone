import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import { styles } from "../UpdateImage/ImageModal";
import allInterests from "../../SetUpProfileScreens/ProfileStepTwo/interestsArray";
import { Pill } from "../../../components/Pill";
import { getColorsArray } from "../../../helpers/getColorsArray";

export default function InterestsModal({ updatedUser, setUpdatedUser }) {
  // const { interests } = updatedUser;
  const [interests, setInterests] = useState(updatedUser.interests);
  const [modalVisible, setModalVisible] = useState(false);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colors = getColorsArray(allInterests.length);
    setColors(colors);
  }, []);

  const handlePress = (item) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((interest) => interest !== item));
      // console.log('interests after filter >>>>>', interests)
    } else if (interests.length < 5) {
      setInterests([ ...interests, item ]);
      // console.log('interests after adding an interest >>>>>', interests)
    }
  };

  console.log('interests >>>>', interests)

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <FlatList
            style={{ flexDirection: "row", flexWrap: "wrap" }}
            data={allInterests}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <Pill 
                  key={index} 
                  text={item} 
                  backgroundColor={interests.includes(item) ? "#6e3b6e" : colors[index]}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>+ / -</Text>
      </TouchableOpacity>
    </View>
  );
}
