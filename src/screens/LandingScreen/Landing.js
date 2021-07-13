import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨</Text>
      <Text style={styles.title}>tingle</Text>
      <Text style={styles.subtitle}>mingle til you tingle</Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
