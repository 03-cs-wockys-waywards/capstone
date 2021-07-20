import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  Pressable,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { Pill } from '../../components/Pill';
import { getLightColorsArray } from '../../helpers/getColorsArray';
import { lightColors } from '../../helpers/colors.js';
import { displaySemanticPronouns } from '../../helpers/displaySemanticPronouns';
import EnlargedImageModel from './EnlargedImageModal';
import styles from './styles';
import { _addLike, _removeLike } from '../../store/userReducer';

export default function SingleUserProfile({ route }) {
  const { user, liked } = route.params;
  const [like, setLike] = useState(liked);
  const [colors, setColors] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const colors = getLightColorsArray(lightColors, 5);
    setColors(colors);
  }, []);

  const handleLike = (id) => {
    if (!like) {
      dispatch(_addLike(id));
      setLike(true);
    } else {
      dispatch(_removeLike(id));
      setLike(false);
    }
  };

  const renderPronouns = (pronouns) => {
    return pronouns
      .map((pronoun) => displaySemanticPronouns(pronoun))
      .join(', ');
  };

  const renderInterests = (interests) => {
    return interests.map((interest, index) => {
      return (
        <Pill key={index} text={interest} backgroundColor={colors[index]} />
      );
    });
  };

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilePreviewContainer}>
        <Pressable onPressIn={handlePress}>
          <ImageBackground
            source={{ uri: user.profilePicture }}
            style={styles.image}
            imageStyle={styles.imageStyle}
          >
            <EnlargedImageModel
              user={user}
              modalVisible={modalVisible}
              closeModal={handlePress}
            />
          </ImageBackground>
        </Pressable>
        <View style={styles.profileInfoContainer}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.nameText}>
              {user.firstName} {user.lastName[0]}.
            </Text>
            {like ? (
              <Icon
                type="material-community"
                name="heart"
                size={25}
                color="#E8073F"
                onPress={() => handleLike(user.id)}
              />
            ) : (
              <Icon
                type="material-community"
                name="heart-plus-outline"
                size={25}
                color="#E8073F"
                onPress={() => handleLike(user.id)}
              />
            )}
          </View>
          <Text style={styles.pronounText}>
            {renderPronouns(user.pronouns)}
          </Text>
          <View>
            <Text style={styles.subheadingText}>Interests</Text>
            <View style={styles.interestsContainer}>
              {renderInterests(user.interests)}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
