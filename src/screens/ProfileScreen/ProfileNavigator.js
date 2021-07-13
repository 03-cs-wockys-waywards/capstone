import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "../EditProfileScreen/EditProfileScreen";

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
          headerRight: () => getSettingsIcon(navigation),
        })}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={() => ({
          title: "Edit Profile",
        })}
      />
    </ProfileStack.Navigator>
  );
}
