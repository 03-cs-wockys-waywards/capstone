import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoubleTap from 'react-native-double-tap'

import { SmallPill } from '../../components/SmallPill'
import { getColorsArray } from '../../helpers/getColorsArray'
import styles from './styles'
import { editUserInfo, _addLike, _removeLike } from '../../store/userReducer'

export default function UserRow({ item, navigation, isLiked }) {
  const likes = useSelector((state) => state.user.likes)
  const [like, setLike] = useState(isLiked)
  const [colors, setColors] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const colors = getColorsArray(5)
    setColors(colors)
  }, [])

  const likesFilter = (id) => {
    return likes.filter((likeId) => likeId !== id)
  }

  const handleLike = (id) => {
    if (!like) {
      dispatch(_addLike(id))
      setLike(true)
    } else {
      dispatch(_removeLike(id))
      setLike(false)
    }
  }

  const renderInterests = (interests) => {
    return interests.map((item, index) => (
      <SmallPill key={index} backgroundColor={colors[index]} text={item} />
    ))
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
          <View style={styles.interestsContainer}>
            {renderInterests(item.interests)}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
