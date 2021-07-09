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
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginTop: 8,
    borderRadius: 45,
    backgroundColor: '#fff',
  },
  interestText: {
    fontSize: 11,
    color: 'black',
  },
})

// listContainer: {
//     marginTop: 20,
//     padding: 20,
//   },
//   entityContainer: {
//     marginTop: 16,
//     borderBottomColor: '#cccccc',
//     borderBottomWidth: 1,
//     paddingBottom: 16,
//   },
//   entityText: {
//     fontSize: 20,
//     color: '#333333',
//   },
