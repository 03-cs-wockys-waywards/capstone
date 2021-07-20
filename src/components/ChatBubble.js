import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubble({ message, user }) {
  const styles = StyleSheet.create({
    userChatContainer: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginRight: 4,
      marginHorizontal: 4,
      borderRadius: 50,
      backgroundColor: 'white',
      marginTop: 3,
    },
    matchChatContainer: {
      alignSelf: 'flex-start',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginLeft: 4,
      marginHorizontal: 4,
      borderRadius: 50,
      backgroundColor: '#c2d831',
      marginTop: 3,
    },
    text: {
      fontSize: 16,
      fontFamily: "Lato_400Regular",
    }
  });

  return (
    <View
      style={
        user === 'currentUser'
          ? styles.userChatContainer
          : styles.matchChatContainer
      }
    >
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
