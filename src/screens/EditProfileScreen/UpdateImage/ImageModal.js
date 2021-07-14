import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

export default function ImageModal({ user, setUser }) {
  const [modalVisible, setModalVisible] = useState(false)

  const useCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync()

    if (status === 'granted') {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
      if (!image.cancelled) {
        setUser({ ...user, profilePicture: image.uri })
      }
    }
    setModalVisible(false)
  }

  const useLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status === 'granted') {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
      if (!image.cancelled) {
        setUser({ ...user, profilePicture: image.uri })
      }
    }
    setModalVisible(false)
  }

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              useCamera()
            }}
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
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Change Profile Picture</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    marginVertical: '75%',
    marginHorizontal: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 45,
    margin: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
})
