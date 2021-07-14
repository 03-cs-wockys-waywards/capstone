import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
import { fetchUsersWithInterests } from '../../store/discoverUsersReducer';
import styles from './styles';
import UserRow from './UserRow';
import { firebase } from '../../firebaseSpecs/config';

export class DiscoverList extends Component {
  constructor(props) {
    super(props);
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
    const { discoverUsers, navigation } = this.props;

    const renderItem = ({ item }) => (
      <UserRow item={item} navigation={navigation} />
    );

    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={discoverUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
  likes: state.user.likes,
  discoverUsers: state.discoverUsers,
});

const mapDispatch = (dispatch) => ({
  setInterests: (interests) => dispatch(fetchUsersWithInterests(interests)),
});

export default connect(mapState, mapDispatch)(DiscoverList);
