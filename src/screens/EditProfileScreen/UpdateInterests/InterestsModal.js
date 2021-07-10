import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
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
    } else if (interests.length < 5) {
      setInterests([ ...interests, item ]);
    }
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <Text style={styles.title}>Update Your Interests</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              if (interests.length) {
                setUpdatedUser({ ...updatedUser, interests: interests });
                setModalVisible(false);
              }
            }}
          >
            <Text>✅</Text>
          </TouchableOpacity>
          <FlatList
            style={{ flexDirection: "row", flexWrap: "wrap" }}
            data={allInterests}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <Pill  
                  text={item} 
                  backgroundColor={interests.includes(item) ? "#6e3b6e" : colors[index]}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>+ / -</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
