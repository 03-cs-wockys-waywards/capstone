import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoubleTap from 'react-native-double-tap'

import defaultProfilePicture from '../../images/default-profile-picture.jpg'
import { getRandomLightColor } from '../../helpers/getRandomLightColor'
import styles from './styles'
import { editUserInfo } from '../../store/userReducer'

export default function UserRow({ item, navigation }) {
  const likes = useSelector((state) => state.user.likes)
  //console.log('user likes on state: ', likes)
  const [like, setLike] = useState(false)
  //const [userLikes, setUserLikes] = useState([])

  const dispatch = useDispatch()

  // useEffect(() => {
  //   setUserLikes(likes)
  // }, [])

  const likesFilter = (id) => {
    return likes.filter((likeId) => likeId !== id)
  }

  const handleLike = (id) => {
    setLike(!like)
    if (!likes.includes(id) && !like) {
      dispatch(editUserInfo({ likes: [...likes, id] }))
    } else {
      dispatch(editUserInfo({ likes: [...likesFilter(id)] }))
    }
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Single User', { user: item, liked: like })
      }
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
            renderItem={({ item }) => (
              <View
                style={styles.interest}
                backgroundColor={getRandomLightColor()}
              >
                <Text style={styles.interestText}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => (item + index).toString()}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
