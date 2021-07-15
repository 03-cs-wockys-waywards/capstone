import React from "react";
import { Text } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import UsersList from "./UsersList";
import SingleUserProfile from "../SingleUserProfileScreen/SingleUserProfile";
import ChatRoomScreen from "../ChatScreens/ChatRoomScreen";

const HomeStack = createStackNavigator();

// replace with our actual logo
const logo = () => <Text>Logo Placeholder</Text>;

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
      onPress={() =>
        navigation.navigate("Chat Room", {
          match,
        })
      }
    />
  );
};

export default function Home({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="UsersList"
        component={UsersList}
        options={{
          headerLeft: () => logo(),
          headerTitle: "",
        }}
      />
      <HomeStack.Screen
        name="Single User"
        component={SingleUserProfile}
        options={({ route }) => ({
          title: renderName(route),
          headerRight: () => userChatIcon(route, navigation),
        })}
      />
      <HomeStack.Screen
        name="Chat Room"
        component={ChatRoomScreen}
        options={() => ({
          title: '',
        })}
      />
    </HomeStack.Navigator>
  );
}
