import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#f2f2f3',
  },
  userRowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 8,
  },
  userTitle: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 10,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    flexGrow: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
})
