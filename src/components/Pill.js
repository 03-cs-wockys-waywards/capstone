import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Pill = ({ text, backgroundColor }) => {
  const bgColor = {
    backgroundColor,
  };

  return (
    <View style={[styles.pillContainer, bgColor]}>
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
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 50,
  },
  pillText: {
    color: '#000',
    fontSize: 16,
  },
});
