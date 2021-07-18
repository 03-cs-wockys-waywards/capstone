import React from 'react';
import { Modal, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

export default function TutorialModal({
  modalVisible,
  handleRequestClose,
  closeModal,
}) {
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      onRequestClose={handleRequestClose}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>Welcome to Tingle!</Text>
          <Text style={styles.bodyText}>
            We strive to connect users based on their niche, specific interests
            shared with others.
          </Text>
          <Text style={styles.bodyText}>
            Begin by expressing your interest by double-tapping on the other
            user's profile photo or simply tapping on the heart!
          </Text>
          <Text style={styles.bodyText}>
            If they like you back, they will appear in your Matches list!
          </Text>
          <Pressable style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Start Tingling!</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    height: '65%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 40,
    justifyContent: 'space-between',
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
  titleText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 28,
    letterSpacing: 0.3,
    textAlign: 'center',
    marginBottom: 20,
  },
  bodyText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1261B1',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
    letterSpacing: 0.1,
    textAlign: 'center',
  },
  logo: {
    resizeMode: 'center',
    width: 200,
    height: 80,
    marginBottom: 40,
  },
});
