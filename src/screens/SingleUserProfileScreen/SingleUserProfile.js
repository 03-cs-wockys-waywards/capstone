import React, { useState } from 'react'
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
import { firebase } from '../../firebaseSpecs/config'
import { getRandomLightColor } from '../../helpers/getRandomLightColor'
import { displaySemanticPronouns } from '../../helpers/displaySemanticPronouns'
import defaultProfilePicture from '../../images/default-profile-picture.jpg'
import styles from './styles'

export default function SingleUserProfile({ route }) {
  const [like, setLike] = useState(false)

  const { user } = route.params

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
      const backgroundColor = getRandomLightColor()
      return (
        <Pill key={index} text={interest} backgroundColor={backgroundColor} />
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
              <Text style={styles.nameText}>
                {renderName(user.firstName, user.lastName)}
              </Text>
              <Text style={styles.pronounText}>
                {renderPronouns(user.pronouns)}
              </Text>
              <DoubleTap doubleTap={() => setLike(!like)} delay={200}>
                {like ? (
                  <MaterialCommunityIcons name="heart" size={18} />
                ) : (
                  <MaterialCommunityIcons name="heart-plus-outline" size={18} />
                )}
              </DoubleTap>
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
