import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
// import { styles } from "../UpdateImage/ImageModal";
import allInterests from "../../SetUpProfileScreens/ProfileStepTwo/interestsArray";
import { Pill } from "../../../components/Pill";
import { getColorsArray } from "../../../helpers/getColorsArray";

export default function InterestsModal({ user, setUser }) {
  const [interests, setInterests] = useState(user.interests);
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
      setInterests([...interests, item]);
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
                setUser({ ...user, interests: interests });
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
                  backgroundColor={
                    interests.includes(item) ? "#6e3b6e" : colors[index]
                  }
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
      <View>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>+ / -</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});
