import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { EmptyCircle, FilledCircle } from '../../../components/ProgressCircles';
import interests from './interestsArray';
import styles from './styles';
import { InterestButton } from '../../../components/InterestButton';
import { useSelector, useDispatch } from 'react-redux';
import { editUserInfo } from '../../../store/userReducer';

export default function InterestsScreen({ navigation, route }) {
  const { password } = route.params;

  const user = useSelector((state) => state.user);
  const init = user.interests.length ? user.interests : [];
  const [selectedInterests, setSelectedInterests] = useState(init);
  const dispatch = useDispatch();

  const handlePress = (item) => {
    if (selectedInterests.includes(item)) {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest !== item)
      );
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, item]);
    }
  };

  const navigateToNext = () => {
    if (selectedInterests.length) {
      dispatch(editUserInfo({ interests: selectedInterests }));
      navigation.navigate('ProfileStepThree', { password });
    } else {
      alert(
        'Please select at least 1 interest. More interests mean a higher chance of finding your match!'
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>What are your interests?</Text>
        <Text style={styles.headerText}>
          You selected {selectedInterests.length} out of 5 interests.
        </Text>
      </View>
      <ScrollView
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
      >
        {interests.map((interest, index) => (
          <InterestButton
            key={index}
            text={interest}
            onPress={() => handlePress(interest)}
            backgroundColor={
              selectedInterests.includes(interest) ? '#FC9DB4' : '#F0F5CC'
            }
            textColor={'black'}
          />
        ))}
      </ScrollView>
      <View style={styles.progressContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileStepOne')}>
          <Icon type="font-awesome" name="chevron-left" color="#000" />
        </TouchableOpacity>
        <FilledCircle />
        <FilledCircle />
        <EmptyCircle />
        <EmptyCircle />
        <TouchableOpacity onPress={navigateToNext}>
          <Icon type="font-awesome" name="chevron-right" color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
