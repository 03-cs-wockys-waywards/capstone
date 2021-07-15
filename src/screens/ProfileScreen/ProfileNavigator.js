import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { firebase } from "../../firebaseSpecs/config";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "../EditProfileScreen/EditProfileScreen";
import { clearData } from "../../store/userReducer";

const ProfileStack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  const { firstName, lastName } = useSelector((state) => state.user);

  const handleEditSettings = (navigation) => (
    <Icon
      type="material-community"
      name="account-cog"
      size={25}
      onPress={() => navigation.navigate("EditProfile")}
    />
  );

  const handleLogout = () => (
    <TouchableOpacity
      onPress={() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log("log out successful");
          })
          .catch((error) => {
            console.error(error);
          });
      }}
    >
      <Text>Log Out</Text>
    </TouchableOpacity>
  );

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          title: `${firstName} ${lastName[0]}.`,
          headerRight: () => handleEditSettings(navigation),
        })}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={() => ({
          title: "Edit Profile",
          headerRight: () => handleLogout(navigation),
        })}
      />
    </ProfileStack.Navigator>
  );
}
