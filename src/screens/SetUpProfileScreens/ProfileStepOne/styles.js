import { StyleSheet, StatusBar } from 'react-native'

// Styles for Set Up Profile: Step One
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    margin: '10%',
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: 5,
  },
  subtitle: {
    textAlign: 'center',
    width: 250,
    fontStyle: 'italic',
  },
  labelText: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
  },
  nameInput: {
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
  progressContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    bottom: '7%',
  },
})
