import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native'
import image from '../../../assets/gradient.png'
import landingLogo from '../../../assets/images/landing-logo.png'
import styles from './styles'

export default function Landing({ navigation }) {
  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Image source={landingLogo} style={styles.logo} />
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
      </SafeAreaView>
    </ImageBackground>
  )
}
