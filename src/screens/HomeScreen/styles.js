import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  flatListContainer: {
    marginTop: '3%',
    marginBottom: '20%',
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
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  userName: {
    fontSize: 19,
    marginRight: 10,
    fontFamily: 'Lato_900Black',
    letterSpacing: 0.5,
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
    color: '#fff',
  },
})
