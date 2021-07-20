import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function UpdateName({ user, setUser }) {
  const { firstName, lastName } = user;

  return (
    <View style={{ marginTop: 15 }}>
      <View style={styles.namesContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUser({ ...user, firstName: value })}
          value={firstName || ''}
        />
      </View>
      <View style={styles.namesContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUser({ ...user, lastName: value })}
          value={lastName || ''}
        />
      </View>
    </View>
  );
}
