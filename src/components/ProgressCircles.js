import React from 'react';
import { View, StyleSheet } from 'react-native';

export const EmptyCircle = () => {
  return <View style={styles.emptyCircle} />;
};

export const FilledCircle = () => {
  return <View style={styles.filledCircle} />;
};

const styles = StyleSheet.create({
  emptyCircle: {
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    backgroundColor: '#E8E8E8',
  },
  filledCircle: {
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    backgroundColor: '#276c8e',
  },
});
