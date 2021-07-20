import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBEBFB',
    justifyContent: 'center',
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
  subheadingText: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 15,
    lineHeight: 30,
    fontFamily: 'Lato_700Bold_Italic',
    letterSpacing: 0.5,
  },
  nameText: {
    fontSize: 22,
    lineHeight: 36,
    paddingLeft: 15,
    marginRight: 10,
    fontFamily: 'Lato_900Black',
    letterSpacing: 0.5,
  },
  pronounText: {
    fontSize: 18,
    color: '#7a7a7a',
    lineHeight: 30,
    paddingLeft: 15,
    marginBottom: 8,
    marginTop: -6,
    fontFamily: 'Lato_400Regular',
    letterSpacing: 0.25,
  },
  profilePreviewContainer: {
    margin: 15,
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 3 },
    shadowOpacity: 0.3,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '100%',
    height: '100%',
    backgroundColor: '#d3d3d3',
    shadowRadius: 3,
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
    marginHorizontal: '5%',
  },
  interestsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
})
