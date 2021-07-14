import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import ChatBubble from '../../components/ChatBubble';
import styles from './styles';

const dummyData = [
  {
    avatar:
      'https://images.pexels.com/photos/4001552/pexels-photo-4001552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    firstName: 'Leslie',
    lastName: 'Heather',
    user: 'currentUser',
    message: 'Nice to chat with you!',
  },
  {
    avatar:
      'https://images.pexels.com/photos/2286385/pexels-photo-2286385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    firstName: 'Jenny',
    lastName: 'Kim',
    user: 'match',
    message: 'Do you have any plans this weekend?',
  },
];

export default function ChatFeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Chat with Match XXX</Text>
        </View>
        {dummyData.map((dummy, index) => (
          <ChatBubble key={index} message={dummy.message} user={dummy.user} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
