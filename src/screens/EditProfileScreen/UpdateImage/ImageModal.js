import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/tingle-capstone/upload';

export default function ImageModal({ setUserPic }) {
  const [modalVisible, setModalVisible] = useState(false);

  const useCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();

    if (status === 'granted') {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
      });

      if (!image.cancelled) {
        let base64Img = `data:image/jpg;base64,${image.base64}`;

        let data = {
          file: base64Img,
          upload_preset: 'iy4cnozl',
        };

        fetch(CLOUDINARY_URL, {
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
        })
          .then(async (r) => {
            let data = await r.json();
            setUserPic(data.url);
          })
          .catch((err) => console.log(err));
      }
    }
    setModalVisible(false);
  };

  const useLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
      });

      if (!image.cancelled) {
        let base64Img = `data:image/jpg;base64,${image.base64}`;

        let data = {
          file: base64Img,
          upload_preset: 'iy4cnozl',
        };

        fetch(CLOUDINARY_URL, {
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
        })
          .then(async (r) => {
            let data = await r.json();
            setUserPic(data.url);
          })
          .catch((err) => console.log(err));
      }
    }
    setModalVisible(false);
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.button}
            onPress={() => {
              useCamera();
            }}
          >
            <Text style={styles.textStyle}>Take Picture</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => useLibrary()}>
            <Text style={styles.textStyle}>Choose From Library</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
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

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    height: '30%',
    marginVertical: '75%',
    marginHorizontal: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: '3%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 45,
    margin: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 2,
    backgroundColor: '#2788EA',
  },
  buttonOpen: {
    backgroundColor: '#2788EA',
  },
  buttonClose: {
    backgroundColor: '#F81A51',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});
