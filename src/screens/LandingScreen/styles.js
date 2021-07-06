import { StyleSheet } from 'react-native'

// Styles for App Landing Page
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    marginHorizontal: '10%',
    marginTop: '50%',
    alignContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 250,
  },
  linksContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
})
