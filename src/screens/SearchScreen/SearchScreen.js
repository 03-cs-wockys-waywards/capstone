import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, FlatList } from 'react-native';
import { fetchUsersWithInterests } from '../../store/discoverUsersReducer';
import SearchBar from '../../components/SearchBar';
import UserRow from '../HomeScreen/UserRow';

export class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalData: [],
      searchData: [],
      searchTerm: '',
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.filterResults = this.filterResults.bind(this);
  }

  componentDidMount() {
    this.setState({ originalData: this.props.discoverUsers });
    // console.log('original data', this.state.originalData);
  }

  updateSearchText(term) {
    this.setState({ searchTerm: term });
    this.filterResults(term);
  }

  filterResults(text) {
    const tempResults = [...this.state.originalData];
    const searchResults = tempResults.filter((user) => {
      // const interests = user.interests.map((interest) =>
      //   interest.toUpperCase()
      // );
      // console.log('interests inside filterResults', interests);
      // const searchTerm = text.toUpperCase();
      // console.log('searchTerm inside filterResults', searchTerm);
      // console.log(
      //   'interests.includes(searchTerm)',
      //   interests.includes(searchTerm)
      // );
      // return interests.includes(searchTerm);
      const firstName = user.firstName.toUpperCase();
      console.log('firstName inside filterResults', firstName);
      const searchTerm = text.toUpperCase();
      console.log('searchTerm inside filterResults', searchTerm);
      console.log(
        'firstName.includes(searchTerm)',
        firstName.includes(searchTerm)
      );
      return firstName.indexOf(searchTerm) > -1;
    });
    // console.log('searchResults inside filterResults', searchResults);
    this.setState({ searchData: searchResults });
  }

  render() {
    const { navigation } = this.props;
    const { originalData, searchData, searchTerm } = this.state;

    const renderItem = ({ item }) => (
      <UserRow item={item} navigation={navigation} />
    );

    return (
      <SafeAreaView>
        <SearchBar
          searchText={searchTerm}
          updateSearchText={this.updateSearchText}
        />
        <FlatList
          data={searchData}
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

export default connect(mapState, mapDispatch)(SearchScreen);
