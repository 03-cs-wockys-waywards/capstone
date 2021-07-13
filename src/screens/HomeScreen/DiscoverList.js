import React, { Component, useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
import { fetchUsersWithInterests } from '../../store/usersReducer';
import styles from './styles';
import UserRow from './UserRow';
import SearchBar from '../../components/SearchBar';
import { firebase } from '../../firebaseSpecs/config';

export class DiscoverList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      discoverData: [],
    };
  }

  // get current user's doc & interests
  componentDidMount() {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          const user = snapshot.data();
          const interests = user.interests;
          // set users with similar interests in the redux store
          this.props.setInterests(interests);
        } else {
          console.log('user does not exist');
        }
      });
  }

  render() {
    const { users, navigation } = this.props;

    const renderItem = ({ item }) => (
      <UserRow item={item} navigation={navigation} />
    );

    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
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

export default connect(mapState, mapDispatch)(DiscoverList);
