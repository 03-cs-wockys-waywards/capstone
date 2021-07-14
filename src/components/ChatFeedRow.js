import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

export default function ChatFeedRow({
  avatar,
  firstName,
  lastName,
  latestMessage,
  handlePress,
}) {
  return (
    <ListItem bottomDivider onPress={handlePress}>
      <Avatar source={{ uri: avatar }} rounded />
      <ListItem.Content>
        <ListItem.Title>
          {firstName} {lastName[0]}.
        </ListItem.Title>
        <ListItem.Subtitle>{latestMessage}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
