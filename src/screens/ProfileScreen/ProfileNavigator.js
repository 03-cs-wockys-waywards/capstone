import { useSelector } from "react-redux";
import React from "react";
import { Text } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import { renderName } from "../../helpers";

const ProfileStack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  const { firstName, lastName } = useSelector((state) => state.user);

  const getSettingsIcon = (navigation) => (
    <Icon
    type="material-community"
    name="account-cog"
    size={25}
    onPress={() => navigation.navigate("EditProfile")}
  />
  );

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
            title: `${firstName} ${lastName[0]}.`,
            // title: renderName(route),
            headerRight: () => getSettingsIcon(navigation)
        })}
      />
    </ProfileStack.Navigator>
  );
}