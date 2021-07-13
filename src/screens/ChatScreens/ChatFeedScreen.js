import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ChatFeedRow from '../../components/ChatFeedRow';

const dummyData = [
  {
    firstName: 'Leslie',
  },
  {
    firstName: 'Jenny',
  },
  {
    firstName: 'Abu',
  },
];

export default class ChatFeedScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          {dummyData.map((dummy, index) => (
            <ChatFeedRow key={index} firstName={dummy.firstName} />
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
