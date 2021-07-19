import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  Pressable,
  Modal,
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

export default function EnlargedImageModel({ user, modalVisible, closeModal }) {
  return (
    <Modal visible={modalVisible} transparent={true} animationType={'fade'}>
      <View style={styles.modal}>
        {/* <View> */}
        <Pressable onPress={closeModal}>
          <Icon
            type="font-awesome"
            name="times-circle"
            color="#212529"
            style={{ size: 30 }}
          />
        </Pressable>
        <ImageBackground
          source={{ uri: user.profilePicture }}
          style={styles.modalImage}
          imageStyle={styles.imageStyle}
        />
        {/* </View> */}
      </View>
    </Modal>
  );
}
