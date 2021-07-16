import React, { useEffect, useState } from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { Pill } from '../../components/Pill'
import { displaySemanticPronouns } from '../../helpers'
import { getLightColorsArray } from '../../helpers/getColorsArray'
import { lightColors } from '../../helpers/colors.js'
import styles from './styles'

export default function UserDetails({ user }) {
  const { firstName, lastName, profilePicture, pronouns, interests } = user
  const [colors, setColors] = useState([])

  useEffect(() => {
    const colors = getLightColorsArray(lightColors, 5)
    setColors(colors)
  }, [])

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
    <ImageBackground
      source={{ uri: profilePicture }}
      style={styles.image}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.profileInfoContainer}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.nameText}>
            {firstName} {lastName[0]}
          </Text>
        </View>
        <Text style={styles.pronounText}>{renderPronouns(pronouns)}</Text>
        <Text style={styles.subheadingText}>Interests</Text>
        <View style={styles.interestsContainer}>
          {renderInterests(interests)}
        </View>
      </View>
    </ImageBackground>
  )
}
