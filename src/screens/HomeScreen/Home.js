import React from "react";
import { Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import UsersList from "./UsersList";
import SingleUserProfile from "../SingleUserProfileScreen/SingleUserProfile";
import headerLogo from "../../../assets/images/header-logo.png";
import ChatRoomScreen from "../ChatScreens/ChatRoomScreen";
import { firebase } from "../../firebaseSpecs/config";
import { shallowEqual, useSelector } from 'react-redux';

const HomeStack = createStackNavigator();

// our logo at the top left of home
const logo = () => <Image source={headerLogo} style={styles.logo} />;

// name of single user profile
const renderName = (route) => {
  return `${route.params.user.firstName} ${route.params.user.lastName[0]}.`;
};

const openChatRoom = (route, navigation, currentUser) => {
  let docId;
  const { user: match } = route.params;
  const messagesRef = firebase.firestore().collection("messages");
  messagesRef
    .where(`users.${currentUser.id}`, "==", true)
    .where(`users.${match.id}`, "==", true)
    .get()
    .then((snapshot) => {
      if (!snapshot.empty) {
        snapshot.docs.forEach((doc) => {
          docId = doc.id;
        });
      } else {
        const chatRoom = messagesRef.doc();
        chatRoom.set({
          users: {
            [match.id]: true,
            [currentUser.id]: true,
          },
          displayData: {
            [match.id]: {
              firstName: match.firstName,
              lastName: match.lastName,
              avatar: match.profilePicture,
            },
            [currentUser.id]: {
              firstName: currentUser.firstName,
              lastName: currentUser.lastName,
              avatar: currentUser.profilePicture
            }
          }
        });
        docId = chatRoom.id;
      }
    })
    .then(() => {
      navigation.navigate("Chat Room", {
        docId,
      });
    });
};

// chat room icon at top right of single user profile
const userChatIcon = (route, navigation) => {
  const currentUser = useSelector((state) => state.user, shallowEqual)
  return (
    <Icon
      type="ionicon"
      name="chatbox-outline"
      size={25}
      onPress={() => openChatRoom(route, navigation, currentUser)}
      style={{ marginRight: 20 }}
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
          headerStyle: {
            shadowColor: "transparent",
            shadowRadius: 0,
            borderBottomWidth: 0,
            backgroundColor: "#fff",
          },
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
          title: "",
        })}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    shadowColor: "transparent",
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  logo: {
    flex: 1,
    alignSelf: "flex-start",
    resizeMode: "center",
    marginLeft: -100,
  },
});
