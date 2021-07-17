import React from "react";
import { Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import UsersList from "./UsersList";
import SingleUserProfile from "../SingleUserProfileScreen/SingleUserProfile";
import headerLogo from "../../../assets/images/header-logo.png";
import ChatRoomScreen from "../ChatScreens/ChatRoomScreen";
import { firebase } from "../../firebaseSpecs/config";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

const HomeStack = createStackNavigator();

// replace with our actual logo
const logo = () => <Image source={headerLogo} style={styles.logo} />;

const renderName = (route) => {
  return `${route.params.user.firstName} ${route.params.user.lastName[0]}.`;
};

const openChatRoom = (route, navigation) => {
  let docId;
  const { user: match } = route.params;
  const currentUserId = firebase.auth().currentUser.uid;
  const messagesRef = firebase.firestore().collection("messages");
  messagesRef
    .where(`users.${currentUserId}`, "==", true)
    .where(`users.${match.id}`, "==", true)
    .get()
    .then((chatRoom) => {
      if (chatRoom.exists) {
        docId = chatRoom.id;
        console.log("docId in if >>>>>", docId);
      } else {
        const chatRoom = messagesRef.doc();
        chatRoom.set({
          users: {
            [match.id]: true,
            [currentUserId]: true,
          },
        });
        docId = chatRoom.id;
        console.log("docId in else >>>>", docId);
      }
    })
    .then(() => {
      console.log("docId in last .then >>>>", docId);
      navigation.navigate("Chat Room", {
        match,
        docId,
      });
    });
};

const userChatIcon = (route, navigation) => {
  return (
    <Icon
      type="material-community"
      name="message-outline"
      size={25}
      onPress={() => openChatRoom(route, navigation)}
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
