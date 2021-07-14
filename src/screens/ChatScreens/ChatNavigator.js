import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatFeedScreen from './ChatFeedScreen';
import ChatRoomScreen from './ChatRoomScreen';

const ChatStack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="ChatFeedScreen" component={ChatFeedScreen} />
      <ChatStack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
    </ChatStack.Navigator>
  );
}
