import { StyleSheet, StatusBar } from 'react-native';

// Styles for Set Up Profile: Step Three
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
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
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: 5,
    fontFamily: 'Lato_900Black',
    letterSpacing: 0.5,
    color: '#1575D4',
  },
  subtitle: {
    textAlign: 'center',
    width: 250,
    fontFamily: 'Lato_300Light_Italic',
    fontSize: 16,
    paddingBottom: 10,
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
  noAccessButtonContainer: {
    marginTop: 20,
  },
  button: {
    height: 45,
    borderRadius: 45,
    backgroundColor: '#4B9CED',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Lato_700Bold_Italic',
    letterSpacing: 0.4,
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: '#ececec',
    borderRadius: 300 / 2,
    marginBottom: 15,
  },
  progressContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    bottom: '5%',
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
});
