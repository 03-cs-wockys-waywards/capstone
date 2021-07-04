import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import styles from './styles'

class AddProfilePic extends Component {
  constructor(props) {
    super(props)
    this.navigation = props.navigation

    this.state = {
      profilePic: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Camera')}
        >
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Gallery')}
        >
          <Text style={styles.buttonText}>Choose from Gallery</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddProfilePic
