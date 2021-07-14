import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import ChatFeedRow from '../../components/ChatFeedRow';
import styles from './styles';

const dummyData = [
  {
    avatar:
      'https://images.pexels.com/photos/4001552/pexels-photo-4001552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    firstName: 'Leslie',
    lastName: 'Heather',
    latestMessage: 'Nice to chat with you!',
  },
  {
    avatar:
      'https://images.pexels.com/photos/2286385/pexels-photo-2286385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    firstName: 'Jenny',
    lastName: 'Kim',
    latestMessage: 'Do you have any plans this weekend?',
  },
  {
    avatar:
      'https://images.pexels.com/photos/6134742/pexels-photo-6134742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    firstName: 'Abu',
    lastName: 'Moe',
    latestMessage: "Hahaha that's funny",
  },
];

export default function ChatFeedScreen() {
  const handlePress = (firstName) => {
    // return <Text>{firstName}</Text>;
    console.log(firstName);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Chat Feed</Text>
        </View>
        {dummyData.map((dummy, index) => (
          <ChatFeedRow
            key={index}
            avatar={dummy.avatar}
            firstName={dummy.firstName}
            lastName={dummy.lastName}
            latestMessage={dummy.latestMessage}
            handlePress={() => handlePress(dummy.firstName)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
