import { StyleSheet } from 'react-native';

// Styles for App Landing Page
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: '50%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    color: '#F4D4E1',
  },
  subtitle: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 75,
    marginTop: -50,
    fontFamily: 'Lato_300Light_Italic',
    letterSpacing: 0.6,
    color: '#F4D4E1',
  },
  linksContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: '10%',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.75,
    color: '#EAB803',
  },
  bar: {
    fontSize: 20,
    fontFamily: 'Lato_900Black',
    color: '#C2D831',
  },
  image: {
    flexGrow: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  logo: {
    width: '100%',
    resizeMode: 'center',
  },
});
