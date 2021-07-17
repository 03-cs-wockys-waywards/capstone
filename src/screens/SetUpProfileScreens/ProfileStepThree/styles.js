import { StyleSheet, StatusBar } from 'react-native'

// Styles for Set Up Profile: Step Three
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: '10%',
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  noAccessMessageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '15%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: 5,
  },
  labelText: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
  },
  noAccessMessageTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 50,
    textAlign: 'center',
  },
  noAccessMessageText: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
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
  buttonContainer: {
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: '#d3d3d3',
  },
  progressContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    bottom: '7%',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
