import React, { Component, useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { fetchUsersWithInterests } from '../../store/usersReducer';
import styles from './styles';
import UserRow from './UserRow';
import SearchBar from '../../components/SearchBar';
import { firebase } from '../../firebaseSpecs/config';
import { ButtonGroup } from 'react-native-elements';

export class UsersList extends Component {
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
    const { users, navigation } = this.props;
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
      </SafeAreaView>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  setInterests: (interests) => dispatch(fetchUsersWithInterests(interests)),
});

export default connect(mapState, mapDispatch)(UsersList);
