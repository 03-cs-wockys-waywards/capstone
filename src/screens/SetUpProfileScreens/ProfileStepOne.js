import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileStepOne() {
  return (
    <SafeAreaView>
      <View>
        <Text>Step 1:</Text>
        <Text>Who are you?</Text>
      </View>
      <View>
        <Text>My name is:</Text>
        <TextInput placeholder="First Name" />
        <TextInput placeholder="First Name" />
      </View>
      <View>
        <Text>My pronouns are:</Text>
        {/* TODO: Are the pronouns radio buttons or checkboxes?
        (only allow one selection or multiple?) */}
      </View>
      <View></View>
    </SafeAreaView>
  );
}
