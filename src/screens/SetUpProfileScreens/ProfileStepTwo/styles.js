import { StyleSheet, StatusBar } from 'react-native'

// Styles for Set Up Profile: Step Two
export default StyleSheet.create({
  container: {
    flex: 1,
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
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: 5,
    fontFamily: 'Lato_900Black',
    letterSpacing: 0.5,
    color: '#1575D4',
  },
  subheader: {
    fontFamily: 'Lato_300Light_Italic',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Lato_400Regular',
    color: '#F93A6A',
  },
  subText: {
    textAlign: 'center',
    width: 350,
    fontSize: 16,
  },
  scrollView: {
    width: '100%',
    alignSelf: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interests: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    flex: 1,
  },
  itemName: {
    fontSize: 16,
  },
  progressContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    alignItems: 'center',
    bottom: '5%',
  },
})
