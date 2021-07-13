import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#e4dbff',
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
  interest: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 14,
    marginLeft: 7,
    marginTop: 8,
    borderRadius: 45,
  },
  interestText: {
    fontSize: 11,
    color: 'black',
  },
})
