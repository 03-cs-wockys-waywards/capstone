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
import { EmptyCircle, FilledCircle } from '../../components/ProgressCircles';
import Checkbox from '../../components/Checkbox';
import styles from './styles';

export default function ProfileStepOne() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pronouns, setPronouns] = useState([]);

  const handlePress = () => {
    console.log({ firstName, lastName, pronouns });
    // validating whether all inputs are completed
    if (!firstName || !lastName || pronouns.length === 0) {
      alert('Please fill out all required fields');
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
