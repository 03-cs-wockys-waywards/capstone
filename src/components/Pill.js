import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Pill = ({ text, backgroundColor }) => {
  return (
    <View style={[styles.pillContainer, backgroundColor]}>
      <Text style={styles.pillText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pillContainer: {
    // make the container as big as the text
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 50,
  },
  pillText: {
    color: '#000',
    fontSize: 16,
  },
});
