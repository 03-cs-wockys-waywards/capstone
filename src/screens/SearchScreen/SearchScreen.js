import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import SearchBar from '../../components/SearchBar';

export default class SearchScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {}

  updateSearchText(term) {
    console.log('searchTerm', term);
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <SafeAreaView>
        <SearchBar
          searchText={searchTerm}
          updateSearchText={() => this.updateSearchText(searchTerm)}
        />
      </SafeAreaView>
    );
  }
}
