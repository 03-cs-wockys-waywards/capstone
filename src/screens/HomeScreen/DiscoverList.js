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
    const { searchText } = this.state;

    const renderItem = ({ item }) => (
      <UserRow item={item} navigation={navigation} />
    );

    //const [searchText, setSearchText] = useState('')
    // Once we connect to the firebase, discoverData should be retrieved from firebase through useEffect hook when the component mounts
    //const [discoverData, setDiscoverData] = useState([...DATA])
    //const [discoverData, setDiscoverData] = useState([...users])

    // const updateSearchText = (text) => {
    //   setSearchText(text)
    //   filterDiscover(text)
    // }
    const updateSearchText = (text) => {
      this.setState({ searchText: text });
      filterDiscover(text);
    };

    // TODO: convert into a helper function to use in the Chats screen as well
    // const filterDiscover = (text) => {
    //   //const tempDiscoverData = [...DATA]
    //   const tempDiscoverData = [...users]
    //   const newDiscoverData = tempDiscoverData.filter((user) => {
    //     const firstName = user.firstName.toUpperCase()
    //     const searchTerm = text.toUpperCase()
    //     return firstName.indexOf(searchTerm) > -1
    //   })
    //   setDiscoverData(newDiscoverData)
    // }
    const filterDiscover = (text) => {
      const tempDiscoverData = [...users];
      const newDiscoverData = tempDiscoverData.filter((user) => {
        const firstName = user.firstName.toUpperCase();
        const searchTerm = text.toUpperCase();
        return firstName.indexOf(searchTerm) > -1;
      });
      this.setState({ discoverData: newDiscoverData });
    };

    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          // To prevent SearchBar component from re-rendering (i.e. keyboard losing focus),
          // directly render SearchBar inside of ListHeaderComponent rather than using a separate function
          ListHeaderComponent={
            <SearchBar
              updateSearchText={updateSearchText}
              searchText={searchText}
            />
          }
          stickyHeaderIndices={[0]}
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
