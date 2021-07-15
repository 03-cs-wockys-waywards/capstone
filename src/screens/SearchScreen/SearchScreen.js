import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import UserRow from '../HomeScreen/UserRow';
import interestsArray from '../SetUpProfileScreens/ProfileStepTwo/interestsArray';
import styles from './styles';

export class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalData: [],
      searchData: [],
      searchTerm: '',
      interests: interestsArray,
      suggestions: [],
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
    if (text.length === 0) {
      this.setState({ suggestions: [] });
    } else {
      // filter through interests to display autocomplete suggestions to users
      const regex = new RegExp(`^${text}`, 'i');
      const suggestions = this.state.interests
        .sort()
        .filter((interest) => regex.test(interest));
      this.setState(() => ({ suggestions }));

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
  }

  selectSuggestion(value) {
    this.setState(() => ({
      searchTerm: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <>
        {suggestions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              this.filterResults(item);
              this.selectSuggestion(item);
            }}
            style={styles.suggestionsContainer}
          >
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  }

  screenDescription() {
    const { searchData, searchTerm, suggestions } = this.state;
    if (searchTerm.length === 0 && searchData.length === 0) {
      return (
        <Text style={styles.descriptionText}>
          Search your Discover List by interest!
        </Text>
      );
    } else if (searchTerm.length !== 0 && suggestions.length === 0) {
      return (
        <Text style={styles.descriptionText}>
          No users found with {searchTerm} 🥺
        </Text>
      );
    }
    return null;
  }

  render() {
    const { navigation } = this.props;
    const { searchData, searchTerm } = this.state;

    const renderItem = ({ item }) => {
      return <UserRow item={item} navigation={navigation} />;
    };

    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          searchText={searchTerm}
          updateSearchText={this.updateSearchText}
        />
        <ScrollView>{this.renderSuggestions()}</ScrollView>
        <FlatList
          data={searchData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={() => this.screenDescription()}
        />
      </SafeAreaView>
    );
  }
}

const mapState = (state) => ({
  discoverUsers: state.discoverUsers,
});

export default connect(mapState, null)(SearchScreen);
