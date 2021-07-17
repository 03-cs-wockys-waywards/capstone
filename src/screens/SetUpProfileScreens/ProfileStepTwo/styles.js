import { StyleSheet, StatusBar } from 'react-native'

// Styles for Set Up Profile: Step Two
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: '10%',
    height: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
  },
  subtitle: {
    textAlign: 'center',
    width: 250,
    fontStyle: 'italic',
  },
  flatList: {
    marginBottom: '32%',
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
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
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    bottom: '3%',
  },
})
