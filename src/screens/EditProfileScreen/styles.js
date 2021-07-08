import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  label: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 45,
    marginBottom: 17,
    paddingLeft: 15,
  },
});