import React from 'react'
import { View, StyleSheet } from 'react-native'

export const EmptyCircle = () => {
  return <View style={styles.emptyCircle} />
}

export const FilledCircle = () => {
  return <View style={styles.filledCircle} />
}

const styles = StyleSheet.create({
  emptyCircle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#E8E8E8',
  },
  filledCircle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#C9DD4B',
  },
})
