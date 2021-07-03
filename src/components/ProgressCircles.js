import React from 'react';
import { View, StyleSheet } from 'react-native';

export const EmptyCircle = () => {
  return <View style={styles.emptyCircle} />;
};

const styles = StyleSheet.create({
  emptyCircle: {
    width: 23,
    height: 23,
    borderRadius: 23 / 2,
    backgroundColor: '#E8E8E8',
  },
});
