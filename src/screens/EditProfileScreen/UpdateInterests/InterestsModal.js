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
  const [modalVisible, setModalVisible] = useState(false);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colors = getColorsArray(allInterests.length);
    setColors(colors);
  }, []);

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <FlatList
            style={{ flexDirection: "row", flexWrap: "wrap" }}
            data={allInterests}
            renderItem={({ item, index }) => (
              <Pill key={index} text={item} backgroundColor={colors[index]} />
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
