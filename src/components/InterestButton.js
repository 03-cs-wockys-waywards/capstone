import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const InterestButton = ({ onPress, text, backgroundColor }) => {
  const bgColor = {
    backgroundColor,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.pillContainer, bgColor]}>
      <Text style={styles.pillText}>{text}</Text>
    </TouchableOpacity>
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
    fontSize: 16,
  },
});
