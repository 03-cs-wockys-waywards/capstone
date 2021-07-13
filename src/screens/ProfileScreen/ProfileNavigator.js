import React from "react";
import { Text } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { rightIcons } from "../../components/HeaderRightIcons";
import ProfileScreen from "./ProfileScreen";

const ProfileStack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}