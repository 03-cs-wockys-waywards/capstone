import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const SmallPill = ({ text, backgroundColor }) => {
  return (
    <View style={styles.interest} backgroundColor={backgroundColor}>
      <Text style={styles.interestText}>{text}</Text>
    </View>
  )
}

export const MediumPill = ({ text, backgroundColor }) => {
  return (
    <View style={styles.medInterest} backgroundColor={backgroundColor}>
      <Text style={styles.medInterestText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  interest: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 14,
    marginLeft: 7,
    marginTop: 8,
    borderRadius: 45,
  },
  interestText: {
    fontSize: 11,
    color: '#070C2C',
  },
  medInterest: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 45,
    marginRight: 5,
    marginBottom: 5,
  },
  medInterestText: {
    fontSize: 14,
    color: '#070C2C',
  },
})
