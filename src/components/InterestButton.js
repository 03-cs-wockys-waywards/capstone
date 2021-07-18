import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const InterestButton = ({ onPress, text, backgroundColor }) => {
  const bgColor = {
    backgroundColor,
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.pillContainer, bgColor]}>
      <Text style={styles.pillText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pillContainer: {
    // make the container as big as the text
    //alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 7,
    marginBottom: 7,
    borderRadius: 45,
  },
  pillText: {
    fontSize: 15,
    color: '#070C2C',
  },
})
