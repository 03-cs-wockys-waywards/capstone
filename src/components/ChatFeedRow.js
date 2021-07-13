import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Divider, ListItem } from 'react-native-elements';

export default function ChatFeedRow({ firstName, lastName, latestMessage }) {
  return (
    <ListItem>
      <Avatar rounded source={{}} />
      <ListItem.Content>
        <ListItem.Title>{firstName}</ListItem.Title>
        {/* <ListItem.Subtitle></ListItem.Subtitle> */}
      </ListItem.Content>
      <Divider />
    </ListItem>
  );
}
