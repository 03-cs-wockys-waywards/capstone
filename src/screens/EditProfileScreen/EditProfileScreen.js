import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native';
import { firebase } from '../../firebaseSpecs/config';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import UpdateImage from './UpdateImage/UpdateImage';
import UpdateName from './UpdateName';
import UpdatePronouns from './UpdatePronouns';
import UpdateInterests from './UpdateInterests/UpdateInterests';
import { editUserInfo } from '../../store/userReducer';

export default function EditProfile({ navigation }) {
  const _user = useSelector((state) => state.user);
  const [user, setUser] = useState(_user);

  const dispatch = useDispatch();

  const updateFirebase = () => {
    const uid = _user.id;
    const data = user;
    const usersRef = firebase.firestore().collection('users');
    usersRef
      .doc(uid)
      .set(data)
      .catch((error) => {
        alert(error);
      })
      .then(() => {
        dispatch(editUserInfo(user));
        navigation.popToTop();
      });
  };

  return (
    <SafeAreaView style={styles.topView}>
      <ScrollView>
        <UpdateImage user={user} setUser={setUser} />
        <UpdateName user={user} setUser={setUser} />
        <UpdatePronouns user={user} setUser={setUser} />
        <UpdateInterests user={user} setUser={setUser} />
        <TouchableOpacity style={styles.button} onPress={updateFirebase}>
          <Text style={styles.buttonText}>Confirm Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
