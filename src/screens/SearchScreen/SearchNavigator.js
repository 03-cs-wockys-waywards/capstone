import React from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import SingleUserProfile from '../SingleUserProfileScreen/SingleUserProfile';

const SearchStack = createStackNavigator();

const renderName = (route) => {
  return `${route.params.user.firstName} ${route.params.user.lastName[0]}.`;
};

const userChatIcon = (route, navigation) => {
  const { user: match } = route.params;
  return (
    <Icon
      type="material-community"
      name="message-outline"
      size={25}
      onPress={() => navigation.navigate('Chat', {
        match
      })}
    />
  )
};

export default function ProfileNavigator({ navigation }) {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name="Single User"
        component={SingleUserProfile}
        options={({ route }) => ({
          title: renderName(route),
          headerRight: () => userChatIcon(route, navigation),
        })}
      />
    </SearchStack.Navigator>
  );
}
