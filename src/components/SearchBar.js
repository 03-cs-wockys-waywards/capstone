import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

export default function Search({ updateSearchText, searchText }) {
  return (
    <View style={styles.searchContainer}>
      <SearchBar
        placeholder="Search"
        onChangeText={(searchText) => updateSearchText(searchText)}
        value={searchText}
        showCancel={true}
        lightTheme={true}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  inputContainer: {
    borderRadius: 50,
    backgroundColor: '#FAFBFC',
    width: '90%',
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
