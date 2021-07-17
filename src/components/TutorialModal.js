import React from 'react';
import { Modal, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import logo from '../../assets/images/landing-logo.png';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';

export default function TutorialModal({
  modalVisible,
  handleRequestClose,
  closeModal,
}) {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeRight={() => console.log('swiped right')}
      config={config}
    >
      <View style={styles.container}>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={handleRequestClose}
        >
          <View style={styles.container}>
            <View style={styles.modalContainer}>
              <Image source={logo} />
              <Text>Welcome to Tingle!</Text>
              <Pressable style={styles.button} onPress={closeModal}>
                <Text>Start Tingling</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {},
  button: {},
});
