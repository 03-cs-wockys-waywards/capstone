import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { EmptyCircle, FilledCircle } from '../../../components/ProgressCircles'
import Checkbox from '../../../components/Checkbox'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { editUserInfo } from '../../../store/userReducer'

export default function ProfileStepOne({ navigation, route }) {
  const { email, password } = route.params

  const reduxFirstName = useSelector((state) => state.user.firstName)
  const reduxLastName = useSelector((state) => state.user.lastName)
  const reduxPronouns = useSelector((state) => state.user.pronouns)
  const [firstName, setFirstName] = useState(reduxFirstName || '')
  const [lastName, setLastName] = useState(reduxLastName || '')
  const [pronouns, setPronouns] = useState(reduxPronouns || [])

  const dispatch = useDispatch()

  const handlePress = () => {
    // validating whether all inputs are completed
    if (!firstName || !lastName || pronouns.length === 0) {
      alert('Please fill out all required fields')
    } else {
      dispatch(
        editUserInfo({
          email,
          firstName,
          lastName,
          pronouns,
        })
      )
      navigation.navigate('ProfileStepTwo', { password })
    }
  }

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Who are you?</Text>
          <Text style={styles.subtitle}>
            Only the first initial of your last name will be shown
          </Text>
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
          <View style={{ alignSelf: 'center' }}>
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
        </View>
        <View style={styles.progressContainer}>
          <Icon type="font-awesome" name="chevron-left" color="transparent" />
          <FilledCircle />
          <EmptyCircle />
          <EmptyCircle />
          <EmptyCircle />
          <TouchableOpacity onPress={handlePress}>
            <Icon type="font-awesome" name="chevron-right" color="#FBC912" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
