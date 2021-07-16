import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import styles from "../styles";
import { Pill } from '../../../components/Pill'
import { getLightColorsArray } from '../../../helpers/getColorsArray'
import { lightColors } from '../../../helpers/colors.js'
import InterestsModal from './InterestsModal'

export default function UpdateInterests({ user, setUser }) {
  const { interests } = user
  const [colors, setColors] = useState([])

  useEffect(() => {
    const colors = getLightColorsArray(lightColors, 5)
    setColors(colors)
  }, [])

  return (
    <View style={{ zIndex: -5 }}>
      <View style={styles.container}>
        <Text style={styles.label}>Interests</Text>
        <InterestsModal user={user} setUser={setUser} />
      </View>
      <View style={styles.interestsContainer}>
        {interests.map((interest, idx) => {
          return (
            <Pill key={idx} text={interest} backgroundColor={colors[idx]} />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 60,
  },
  interestsContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 60,
    marginBottom: '10%',
  },
  label: {
    fontSize: 16,
    letterSpacing: 0.125,
    fontWeight: '500',
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 3,
  },
})
