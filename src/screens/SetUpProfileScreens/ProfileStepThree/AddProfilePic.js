import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { EmptyCircle, FilledCircle } from '../../../components/ProgressCircles';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../../firebaseSpecs/config';
import { useDispatch, useSelector } from 'react-redux';
import { editUserInfo } from '../../../store/userReducer';

import styles from './styles';

export default function AddProfilePic({ navigation }) {
  const user = useSelector((state) => state.user);
  const profilePicture = user.profilePicture;

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(profilePicture || null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const useCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(editUserInfo({ profilePicture: result.uri }));
      setImage(result.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(editUserInfo({ profilePicture: result.uri }));
      setImage(result.uri);
    }
  };

  // const imageName = 'profile' + user.userId;

  const uploadPicture = async () => {
    const uri = image;
    const childPath = `profile/${firebase.auth().currentUser.uid}`;
    console.log('childPath', childPath);

    const response = await fetch(uri);
    const blob = await response.blob();

    firebase
      .storage()
      .ref()
      .child(childPath)
      .put(blob)
      .then(() => {
        setLoading(false);
        console.log(`${uri} has been successfully uploaded.`);
      });
  };

  const navigateToNext = () => {
    uploadPicture();
    console.log('imageName addprofilepic', image);
    navigation.navigate('Confirmation', { image, loading });
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }

  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Step 3:</Text>
        <Text style={styles.labelText}>Add a profile picture.</Text>
      </View>

      <Image
        source={{ uri: image }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />

      <TouchableOpacity style={styles.button} onPress={() => useCamera()}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => pickImage()}>
        <Text style={styles.buttonText}>Choose from Gallery</Text>
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileStepTwo')}>
          <Icon type="font-awesome" name="chevron-left" color="#000" />
        </TouchableOpacity>
        <FilledCircle />
        <FilledCircle />
        <FilledCircle />
        <EmptyCircle />
        <TouchableOpacity onPress={navigateToNext}>
          <Icon type="font-awesome" name="chevron-right" color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
