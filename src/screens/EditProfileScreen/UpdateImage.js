import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
// import styles from "./styles";

export default function UpdateImage({ updatedUser, setUpdatedUser }) {
  const [modalVisible, setModalVisible] = useState(false);

  const useCamera = async () => {
    const cameraStatus = await Camera.requestPermissionsAsync();

    if (cameraStatus.status === "granted") {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!image.cancelled) {
        setUpdatedUser({ ...updatedUser, profilePicture: image.uri });
        setModalVisible(false);
      }
    }
  };

  const useLibrary = async () => {
    setModalVisible(false);
    const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (galleryStatus.status === "granted") {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!image.cancelled) {
        setUpdatedUser({ ...updatedUser, profilePicture: image.uri });
      }
    }
  };

  return (
    <View>
      {/* <Image source={{ uri: profilePicture }} style={styles.image} /> */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => useCamera()}
            >
              <Text style={styles.textStyle}>Take Picture</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => useLibrary()}
            >
              <Text style={styles.textStyle}>Choose From Library</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Change Profile Picture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
});
