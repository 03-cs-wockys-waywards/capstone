import { StyleSheet, StatusBar } from 'react-native';

// Styles for Set Up Profile: Step One
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
    width: '80%',
    fontFamily: 'Lato_300Light_Italic',
    fontSize: 16,
  },
  labelText: {
    fontSize: 17,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: 'Lato_700Bold_Italic',
    letterSpacing: 0.4,
    textAlign: 'center',
    color: '#FA5B83',
  },
  nameInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    width: '60%',
    height: 45,
    marginBottom: 17,
    paddingLeft: 15,
    alignSelf: 'center',
    fontFamily: 'Lato_400Regular',
    letterSpacing: 0.2,
  },
  progressContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    bottom: '5%',
  },
});
