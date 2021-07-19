import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import DoubleTap from 'react-native-double-tap'

import { SmallPill } from '../../components/SmallPill'
import { getLightColorsArray } from '../../helpers/getColorsArray'
import { lightColors } from '../../helpers/colors.js'
import styles from './styles'
import { _addLike, _removeLike } from '../../store/userReducer'

export default function UserRow({ item, navigation }) {
  const likes = useSelector((state) => state.user.likes)
  const isLiked = likes.includes(item.id)
  const [like, setLike] = useState(isLiked)
  const [colors, setColors] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const colors = getLightColorsArray(lightColors, 5)
    setColors(colors)
  }, [])

  const handlePress = () => {
    navigation.navigate('Single User', { user: item, liked: like })
  }

  const handleLike = (id) => {
    if (!isLiked) {
      dispatch(_addLike(id))
      setLike(true)
      console.log('Liked')
    } else {
      dispatch(_removeLike(id))
      setLike(false)
      console.log('Unliked')
    }
  }

  const renderInterests = (interests) => {
    return interests.map((item, index) => (
      <SmallPill key={index} backgroundColor={colors[index]} text={item} />
    ))
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.userRowContainer}>
        <DoubleTap doubleTap={() => handleLike(item.id)} delay={200}>
          <Avatar size={100} rounded source={{ uri: item.profilePicture }} />
        </DoubleTap>
        <View style={styles.infoContainer}>
          <View style={styles.userTitle}>
            <Text style={styles.userName}>
              {item.firstName} {item.lastName[0]}.
            </Text>
            {isLiked ? (
              <Icon
                type="material-community"
                name="heart"
                size={22}
                color="#E8073F"
                onPress={() => handleLike(item.id)}
              />
            ) : (
              <Icon
                type="material-community"
                name="heart-plus-outline"
                size={22}
                color="#E8073F"
                onPress={() => handleLike(item.id)}
              />
            )}
          </View>
          <View style={styles.interestsContainer}>
            {renderInterests(item.interests)}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
