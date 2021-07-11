import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
// import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import UpdateImage from "./UpdateImage/UpdateImage";
import UpdateName from "./UpdateName";
import UpdatePronouns from "./UpdatePronouns";
import UpdateInterests from "./UpdateInterests/UpdateInterests";
import Header from "./Header";

export default function EditProfile({ navigation }) {
  const _user = useSelector((state) => state.user);
  const [user, setUser] = useState(_user);

  console.log("------------------")
  console.log('user data from redux store >>>>>', _user)
  console.log("------------------")

  return (
    <SafeAreaView>
      <Header user={user} />
      <ScrollView>
        <View style={styles.container}>
          <UpdateImage
            user={user}
            setUser={setUser}
          />
          <UpdateName
            user={user}
            setUser={setUser}
          />
          <UpdatePronouns
            user={user}
            setUser={setUser}
          />
          <UpdateInterests
            user={user}
            setUser={setUser}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    // justifyContent: "center",
    // alignItems: "center",
  }
});
