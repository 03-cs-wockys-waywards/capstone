import React from 'react'
import { View, Text } from 'react-native'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin'
import styles from './styles'

export default function Landing({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>App Name</Text>
    </View>
  )
}
