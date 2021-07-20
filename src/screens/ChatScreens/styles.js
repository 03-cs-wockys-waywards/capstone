import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: "90%",
    backgroundColor: '#FEF7DD',
  },
  scrollContainer: {
    margin: 10,
    paddingBottom: '15%',
    flexGrow: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: '10%',
  },
  headerText: {
    fontSize: 30,
    fontFamily: "Lato_900Black",
    letterSpacing: 0.35,
    marginBottom: 5,
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
  },
  input: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    color: '#ffffff'
  },
});