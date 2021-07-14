import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
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
  }

  updateSearchText(term) {
    this.setState({ searchTerm: term });
    this.filterResults(term);
  }

  filterResults(text) {
    const tempResults = [...this.state.originalData];
    const searchResults = tempResults.filter((user) => {
      // convert interest and search term to all uppercase to ignore case-sensitivity
      const interests = user.interests.map((interest) =>
        interest.toUpperCase()
      );
      const searchTerm = text.toUpperCase();
      return interests.includes(searchTerm);
    });
    this.setState({ searchData: searchResults });
  }

  render() {
    const { navigation } = this.props;
    const { searchData, searchTerm } = this.state;

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
  discoverUsers: state.discoverUsers,
});

export default connect(mapState, null)(SearchScreen);
