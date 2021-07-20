import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
          }}
          behavior="padding"
        >
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ message: text })}
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
            />
          </View>
          <Button onPress={this.send} title="SEND" />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    bottom: 0,
  },
  inner: {
    flex: 1,
  },
  input: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    color: '#ffffff',
  },
});
