import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  scrollContainer: {
    paddingBottom: '15%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: '10%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: 5,
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 7,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "space-between",
  },
  // textInput: {
  //   padding: 10,
  //   borderWidth: 1,
  //   borderRadius: 50,
  //   flexGrow: 1,
  //   alignContent: "center",
  //   zIndex: -5
  // },
  sendButton: {
    zIndex: 5
  }
});
