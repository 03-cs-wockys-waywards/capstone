import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen, ProfileNavigator, ChatNavigator } from './screens';
import { editUserInfo } from './store/userReducer';

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return null;
};

export default function MainScreen(props) {
  const user = props.route.params.user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editUserInfo(user));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#d7f81e"
      inactiveColor="#e4dbff"
      labeled={false}
      labelStyle={{ fontSize: 12 }}
      barStyle={{
        backgroundColor: '#106563',
        alignItems: 'center',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="forum-outline"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
