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
    backgroundColor: '#d9e4e1',
    borderBottomColor: '#d9e4e1',
    borderTopColor: '#d9e4e1',
  },
  inputContainer: {
    borderRadius: 50,
    backgroundColor: '#FAFBFC',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
