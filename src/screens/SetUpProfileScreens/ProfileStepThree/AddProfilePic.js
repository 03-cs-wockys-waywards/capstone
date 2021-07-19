import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { EmptyCircle, FilledCircle } from '../../../components/ProgressCircles';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { editUserInfo } from '../../../store/userReducer';
import styles from './styles';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/tingle-capstone/upload';

const defaultPhoto = `https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`;

export default function AddProfilePic({ navigation, route }) {
  const { password } = route.params;
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [defaultPhotoBool, setDefaultPhotoBool] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);

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
      aspect: [4, 3],
      base64: true,
    });

    if (!result.cancelled) {
      let base64Img = `data:image/jpg;base64,${result.base64}`;

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
          setPhotoUrl(data.url);
          dispatch(editUserInfo({ profilePicture: data.url }));
        })
        .catch((err) => console.log(err));
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });

    if (!result.cancelled) {
      let base64Img = `data:image/jpg;base64,${result.base64}`;

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
          setPhotoUrl(data.url);
          dispatch(editUserInfo({ profilePicture: data.url }));
        })
        .catch((err) => console.log(err));
    }
  };

  const useDefaultPhoto = () => {
    setDefaultPhotoBool(true);
    setPhotoUrl(defaultPhoto);
    dispatch(editUserInfo({ profilePicture: defaultPhoto }));
    navigateToNext();
  };

  const navigateToNext = () => {
    navigation.navigate('Confirmation', { password, defaultPhotoBool });
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return (
      <SafeAreaView style={styles.noAccessMessageContainer}>
        <Text style={styles.noAccessMessageTitleText}>Oh no! 😱</Text>
        <Text style={styles.noAccessMessageText}>
          For your most enjoyable Tingle experience, please give Tingle access
          to your camera and photos in your device settings.
        </Text>
        <View style={styles.buttonContainer}>
          {/* <Button title="Enable Access" style={styles.enableAccessText} /> */}
        </View>
      </SafeAreaView>
    );
  }

  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return (
      <SafeAreaView style={styles.noAccessMessageContainer}>
        <Text style={styles.noAccessMessageTitleText}>Oh no! 😱</Text>
        <Text style={styles.noAccessMessageText}>
          For your most enjoyable Tingle experience, please give Tingle access
          to your camera and photos in your device settings.
        </Text>
        <View style={styles.buttonContainer}>
          {/* <Button title="Enable Access" style={styles.enableAccessText} /> */}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>How do you look?</Text>
          <Text style={styles.subtitle}>
            Add a profile picture that shows off that quirky personality of
            yours!
          </Text>
        </View>

        <Image
          source={{ uri: photoUrl }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            marginBottom: 15,
          }}
        >
          <Icon
            raised
            reverse="true"
            type="ionicon"
            name="camera-outline"
            color="#D1E265"
            size={28}
            onPress={() => useCamera()}
          />

          <Icon
            raised
            reverse="true"
            type="ionicon"
            name="images-outline"
            color="#D1E265"
            size={28}
            onPress={() => pickImage()}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => useDefaultPhoto()}
        >
          <Text style={styles.buttonText}>Use Default Photo</Text>
        </TouchableOpacity>

        <View style={styles.progressContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileStepTwo')}
          >
            <Icon type="font-awesome" name="chevron-left" color="#FBC912" />
          </TouchableOpacity>
          <FilledCircle />
          <FilledCircle />
          <FilledCircle />
          <EmptyCircle />
          <TouchableOpacity
            onPress={() => {
              if (photoUrl === null) {
                alert(
                  'Please upload a profile picture. You can also choose a default photo option and choose a different photo later!'
                );
              } else {
                navigateToNext();
              }
            }}
          >
            <Icon type="font-awesome" name="chevron-right" color="#FBC912" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
