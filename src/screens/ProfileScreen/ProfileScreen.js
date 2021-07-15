import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, View } from 'react-native';

import UserDetails from './UserDetails';
import styles from './styles';

export default function ProfileScreen() {
  const user = useSelector((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profilePreviewContainer}>
          {user && <UserDetails user={user} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
