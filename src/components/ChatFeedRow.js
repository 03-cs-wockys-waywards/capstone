import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

export default function ChatFeedRow({
  avatar,
  firstName,
  lastName,
  latestMessage,
  handlePress,
}) {
  return (
    <ListItem bottomDivider onPress={handlePress}>
      <Avatar
        source={{ uri: avatar }}
        rounded
        size="medium"
        activeOpacity={0.25}
        containerStyle={{borderWidth: 0.75, borderColor: '#F4D4E1'}}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.name}>
          {firstName} {lastName[0]}.
        </ListItem.Title>
        <ListItem.Subtitle style={styles.latestMessage}>
          {latestMessage}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 17.5,
    fontFamily: "Lato_900Black",
    paddingBottom: 1.5,
    letterSpacing: 0.35,
  },
  latestMessage: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
    paddingBottom: 1.5,
  },
});
