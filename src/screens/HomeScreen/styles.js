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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '60%',
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: '10%',
    lineHeight: 30,
    color: '#223147',
  },
})
