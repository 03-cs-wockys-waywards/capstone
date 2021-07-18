import { StyleSheet, StatusBar } from 'react-native'

// Styles for Set Up Confirmation Page
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    marginTop: '10%',
    paddingBottom: '15%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: '10%',
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
    width: 300,
    fontFamily: 'Lato_300Light_Italic',
    fontSize: 16,
  },
  subheadingText: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 15,
    lineHeight: 30,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 36,
    paddingLeft: 15,
  },
  pronounText: {
    fontSize: 18,
    color: '#7a7a7a',
    lineHeight: 30,
    paddingLeft: 15,
  },
  profilePreviewContainer: {
    margin: 15,
    marginBottom: 25,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '100%',
    height: 600,
    backgroundColor: '#d3d3d3',
  },
  imageStyle: {
    borderRadius: 15,
  },
  profileInfoContainer: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 15,
    paddingVertical: '2%',
  },
  interestsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
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
    shadowOpacity: 0.3,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Lato_700Bold_Italic',
    letterSpacing: 0.4,
  },
  confirmButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '5%',
  },
})
