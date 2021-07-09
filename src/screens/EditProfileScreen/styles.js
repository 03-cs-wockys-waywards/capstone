import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  // container: {
  //   flexGrow: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
  container: {
    flexGrow: 1,
    marginHorizontal: '10%',
    marginTop: '10%',
    height: '100%',
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
  image: {
    width: 300,
    height: 300,
    backgroundColor: '#d3d3d3',
  },
  button: {
    height: 48,
    borderRadius: 45,
    backgroundColor: '#136360',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});