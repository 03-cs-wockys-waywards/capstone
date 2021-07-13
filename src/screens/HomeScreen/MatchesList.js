import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
import { fetchPotentialMatches } from '../../store/potentialMatchesReducer';
import styles from './styles';
import UserRow from './UserRow';
import { firebase } from '../../firebaseSpecs/config';

export class MatchesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // get all users have our user in their likes array
    const currentUserId = firebase.auth().currentUser.uid;
    this.props.setPotentials(currentUserId);
  }

  render() {
    const { user, potentialMatches, navigation } = this.props;
    const currentUserLikes = user.likes;

    const renderItem = ({ item }) => (
      <UserRow item={item} navigation={navigation} />
    );

    // look through current user's likes array & find matches
    const matches = potentialMatches.filter((user) =>
      currentUserLikes.includes(user.id)
    );

    if (matches.length > 0) {
      return (
        <SafeAreaView style={styles.listContainer}>
          <FlatList
            data={matches}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </SafeAreaView>
      );
    }
    return <></>;
  }
}

const mapState = (state) => ({
  // logged-in user
  user: state.user,
  // users that are potential matches
  potentialMatches: state.potentialMatches,
});

const mapDispatch = (dispatch) => ({
  setPotentials: (id) => dispatch(fetchPotentialMatches(id)),
});

export default connect(mapState, mapDispatch)(MatchesList);
