import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatFeedScreen from './ChatFeedScreen';
import ChatRoomScreen from './ChatRoomScreen';

const ChatStack = createStackNavigator();

export default function ChatNavigator({ navigation }) {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatFeedScreen"
        component={ChatFeedScreen}
        options={() => ({
          title: 'Chat Feed',
        })}
      />
      <ChatStack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={() => ({
          title: '',
        })}
      />
    </ChatStack.Navigator>
  );
}
