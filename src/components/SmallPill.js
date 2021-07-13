import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const SmallPill = ({ text, backgroundColor }) => {
  return (
    <View style={styles.interest} backgroundColor={backgroundColor}>
      <Text style={styles.interestText}>{text}</Text>
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
    color: 'black',
  },
})
