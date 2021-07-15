import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { BackgroundImage } from 'react-native-elements/dist/config'

import styles from './styles'

const image = require('../../../assets/gradient.png')

export default function Landing({ navigation }) {
  return (
    <BackgroundImage source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>✨</Text>
        <Text style={styles.title}>tingle</Text>
        <Text style={styles.subtitle}>mingle til you tingle</Text>

        <View style={styles.linksContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Registration')}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <Text style={styles.bar}>|</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  )
}
