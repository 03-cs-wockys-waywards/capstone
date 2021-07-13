import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DoubleTap from 'react-native-double-tap';
import { getRandomLightColor } from '../../helpers/getRandomLightColor';
import styles from './styles';
import { editUserInfo, _addLike, _removeLike } from '../../store/userReducer';
import { firebase } from '../../firebaseSpecs/config';

export const getColorsArray = (num) => {
  const colors = new Array(num);
  for (let i = 0; i < colors.length; i++) {
    colors[i] = getRandomLightColor();
  }
  return colors;
};

export default function UserRow({ item, navigation }) {
  const likes = useSelector((state) => state.user.likes);
  const [like, setLike] = useState(false);
  const [colors, setColors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const colors = getColorsArray(5);
    setColors(colors);
  }, []);

  const likesFilter = (id) => {
    return likes.filter((likeId) => likeId !== id);
  };

  const handleLike = (id) => {
    if (!like) {
      dispatch(_addLike(id));
      setLike(true);
    } else {
      dispatch(_removeLike(id));
      setLike(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Single User', { user: item, liked: like });
      }}
    >
      <View style={styles.userRowContainer}>
        <Avatar size={95} rounded source={{ uri: item.profilePicture }} />
        <View style={styles.infoContainer}>
          <View style={styles.userTitle}>
            <Text style={styles.userName}>
              {item.firstName} {item.lastName[0]}.
            </Text>
            <DoubleTap doubleTap={() => handleLike(item.id)} delay={200}>
              {like ? (
                <MaterialCommunityIcons
                  name="heart"
                  size={20}
                  color="#96171B"
                />
              ) : (
                <MaterialCommunityIcons name="heart-plus-outline" size={20} />
              )}
            </DoubleTap>
          </View>
          <FlatList
            style={styles.interestsContainer}
            data={item.interests}
            renderItem={({ item, index }) => (
              <View style={styles.interest} backgroundColor={colors[index]}>
                <Text style={styles.interestText}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => (item + index).toString()}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
