import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e4dbff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  tinyPic: {
    width: 50,
    height: 50,
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
