import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import DiscoverList from './DiscoverList';
import MatchesList from './MatchesList';
import styles from './styles';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const { navigation } = this.props;
    const { selectedIndex } = this.state;

    const buttonOne = () => <Text>Discover</Text>;
    const buttonTwo = () => <Text>Matches</Text>;
    const buttons = [{ element: buttonOne }, { element: buttonTwo }];

    return (
      <SafeAreaView style={styles.listContainer}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            borderRadius: 50,
            height: 50,
            marginHorizontal: 30,
          }}
          innerBorderStyle={{ color: 'transparent' }}
          selectedButtonStyle={{
            backgroundColor: '#bbdaf9',
            borderRadius: 50,
          }}
        />
        {selectedIndex === 0 ? (
          <DiscoverList navigation={navigation} />
        ) : (
          <MatchesList navigation={navigation} />
        )}
      </SafeAreaView>
    );
  }
}
