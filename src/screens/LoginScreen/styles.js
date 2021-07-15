import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '25%',
  },
  sparkle: {
    fontSize: 100,
    textAlign: 'center',
  },
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#1261B1',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.2,
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 17,
    color: '#2e2e2d',
    fontFamily: 'Lato_400Regular',
    letterSpacing: 0.2,
  },
  footerLink: {
    color: '#1261B1',
    fontFamily: 'Lato_900Black',
    fontSize: 17,
    letterSpacing: 0.2,
  },
  image: {
    flexGrow: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
})
