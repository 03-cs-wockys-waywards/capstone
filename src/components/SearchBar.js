import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function Search({ updateSearchText, searchText }) {
  return (
    <SearchBar
      placeholder="Search"
      onChangeText={(value) => updateSearchText(value)}
      value={searchText}
      showCancel={true}
      lightTheme={true}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
  },
  inputContainer: {
    borderRadius: 50,
    backgroundColor: '#FAFBFC',
    marginHorizontal: 10,
  },
});
