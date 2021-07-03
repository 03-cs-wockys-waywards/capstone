import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { EmptyCircle, FilledCircle } from '../../components/ProgressCircles';
import styles from './styles';

export default function ProfileStepOne() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Step 1:</Text>
          <Text style={styles.labelText}>Who are you?</Text>
        </View>
        <View>
          <Text style={styles.labelText}>My name is:</Text>
          <TextInput style={styles.nameInput} placeholder="First Name" />
          <TextInput style={styles.nameInput} placeholder="Last Name" />
        </View>
        <View>
          <Text style={styles.labelText}>My pronouns are:</Text>
          {/* TODO: Are the pronouns radio buttons or checkboxes?
        (only allow one selection or multiple?) */}
        </View>
      </ScrollView>
      <View style={styles.progressContainer}>
        <FilledCircle />
        <EmptyCircle />
        <EmptyCircle />
        <EmptyCircle />
      </View>
    </SafeAreaView>
  );
}
