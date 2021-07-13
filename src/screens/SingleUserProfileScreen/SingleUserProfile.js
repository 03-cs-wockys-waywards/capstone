import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoubleTap from 'react-native-double-tap'

import { Pill } from '../../components/Pill'
import { getColorsArray } from '../../helpers/getColorsArray'
import { displaySemanticPronouns } from '../../helpers/displaySemanticPronouns'
import defaultProfilePicture from '../../images/default-profile-picture.jpg'
import styles from './styles'
import { editUserInfo } from '../../store/userReducer'

export default function SingleUserProfile({ route }) {
  const likes = useSelector((state) => state.user.likes)

  const { user, liked } = route.params
  const [like, setLike] = useState(liked)
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
    setLike(!like)
    if (!likes.includes(id) && !like) {
      dispatch(editUserInfo({ likes: [...likes, id] }))
    } else {
      dispatch(editUserInfo({ likes: [...likesFilter(id)] }))
    }
  }

  const renderName = (firstName, lastName) => {
    return `${firstName} ${lastName[0]}.`
  }

  const renderPronouns = (pronouns) => {
    return pronouns
      .map((pronoun) => displaySemanticPronouns(pronoun))
      .join(', ')
  }

  const renderInterests = (interests) => {
    return interests.map((interest, index) => {
      return (
        <Pill key={index} text={interest} backgroundColor={colors[index]} />
      )
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profilePreviewContainer}>
          <ImageBackground
            source={{ uri: user.profilePicture }}
            defaultSource={defaultProfilePicture}
            style={styles.image}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.profileInfoContainer}>
              <View
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
              >
                <Text style={styles.nameText}>
                  {renderName(user.firstName, user.lastName)}
                </Text>
                <DoubleTap doubleTap={() => handleLike(user.id)} delay={200}>
                  {like ? (
                    <MaterialCommunityIcons
                      name="heart"
                      size={25}
                      color="#96171B"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="heart-plus-outline"
                      size={25}
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
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
