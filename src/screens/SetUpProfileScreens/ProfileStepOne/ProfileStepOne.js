import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { EmptyCircle, FilledCircle } from '../../../components/ProgressCircles';
import Checkbox from '../../../components/Checkbox';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { editUserInfo } from '../../../store/userReducer';

export default function ProfileStepOne({ navigation }) {
  const reduxFirstName = useSelector((state) => state.user.firstName);
  const reduxLastName = useSelector((state) => state.user.lastName);
  const reduxPronouns = useSelector((state) => state.user.pronouns);
  const [firstName, setFirstName] = useState(reduxFirstName || '');
  const [lastName, setLastName] = useState(reduxLastName || '');
  const [pronouns, setPronouns] = useState(reduxPronouns || []);

  const dispatch = useDispatch();

  const handlePress = () => {
    // validating whether all inputs are completed
    if (!firstName || !lastName || pronouns.length === 0) {
      alert('Please fill out all required fields');
    } else {
      dispatch(
        editUserInfo({
          firstName,
          lastName,
          pronouns,
        })
      );
      navigation.navigate('ProfileStepTwo');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Step 1:</Text>
          <Text style={styles.labelText}>Who are you?</Text>
        </View>
        <View>
          <Text style={styles.labelText}>My name is:</Text>
          <TextInput
            style={styles.nameInput}
            placeholder="First Name"
            onChangeText={(value) => setFirstName(value)}
            value={firstName}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Last Name"
            onChangeText={(value) => setLastName(value)}
            value={lastName}
          />
        </View>
        <View>
          <Text style={styles.labelText}>My pronouns are:</Text>
          <Checkbox
            state={pronouns}
            setState={setPronouns}
            name={'She / Her'}
            value={'she'}
          />
          <Checkbox
            state={pronouns}
            setState={setPronouns}
            name={'He / Him'}
            value={'he'}
          />
          <Checkbox
            state={pronouns}
            setState={setPronouns}
            name={'They / Them'}
            value={'they'}
          />
          <Checkbox
            state={pronouns}
            setState={setPronouns}
            name={"I'd rather not say"}
            value={'undisclosed'}
          />
        </View>
        <View style={styles.progressContainer}>
          <Icon type="font-awesome" name="chevron-left" color="transparent" />
          <FilledCircle />
          <EmptyCircle />
          <EmptyCircle />
          <EmptyCircle />
          <TouchableOpacity onPress={handlePress}>
            <Icon type="font-awesome" name="chevron-right" color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
