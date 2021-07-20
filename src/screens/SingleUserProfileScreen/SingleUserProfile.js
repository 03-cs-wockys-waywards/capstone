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
import DoubleTap from 'react-native-double-tap';
import { Pill } from '../../components/Pill';
import { getLightColorsArray } from '../../helpers/getColorsArray';
import { lightColors } from '../../helpers/colors.js';
import { displaySemanticPronouns } from '../../helpers/displaySemanticPronouns';
import defaultProfilePicture from '../../../assets/images/default-profile-picture.jpg';
import styles from './styles';
import { _addLike, _removeLike } from '../../store/userReducer';
import EnlargedImageModel from './EnlargedImageModal';

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

  const renderName = (firstName, lastName) => {
    return `${firstName} ${lastName[0]}.`;
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
            defaultSource={defaultProfilePicture}
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
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={styles.nameText}>
              {renderName(user.firstName, user.lastName)}
            </Text>
            <DoubleTap doubleTap={() => handleLike(user.id)} delay={200}>
              {like ? (
                <Icon
                  type="material-community"
                  name="heart"
                  size={25}
                  color="#E8073F"
                />
              ) : (
                <Icon
                  type="material-community"
                  name="heart-plus-outline"
                  size={25}
                  color="#E8073F"
                />
              )}
            </DoubleTap>
          </View>
          <Text style={styles.pronounText}>
            {renderPronouns(user.pronouns)}
          </Text>
          <Text style={styles.subheadingText}>Interests</Text>
          <View style={styles.interestsContainer}>
            {renderInterests(user.interests)}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
