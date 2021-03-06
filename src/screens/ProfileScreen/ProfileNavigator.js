import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { firebase } from '../../firebaseSpecs/config';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from '../EditProfileScreen/EditProfileScreen';
import { clearData } from '../../store/userReducer';

const ProfileStack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  const { firstName, lastName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEditSettings = (navigation) => (
    <Icon
      type="material-community"
      name="account-cog"
      color="#1261B1"
      size={25}
      onPress={() => navigation.navigate('EditProfile')}
      containerStyle={{ paddingRight: 20 }}
    />
  );

  const handleLogout = () => (
    <TouchableOpacity
      onPress={() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            dispatch(clearData());
          })
          .catch((error) => {
            console.error(error);
          });
      }}
    >
      <Text style={{ marginRight: 20 }}>Log Out</Text>
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
          title: 'Edit Profile',
          headerRight: () => handleLogout(navigation),
        })}
      />
    </ProfileStack.Navigator>
  );
}
