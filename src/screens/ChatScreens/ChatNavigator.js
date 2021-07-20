import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatFeedScreen from './ChatFeedScreen';
import ChatRoomScreen from './ChatRoomScreen';

const ChatStack = createStackNavigator();

export default function ChatNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatFeed"
        component={ChatFeedScreen}
        options={() => ({
          title: 'Chat Feed',
        })}
      />
      <ChatStack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={() => ({
          title: '',
        })}
      />
    </ChatStack.Navigator>
  );
}
