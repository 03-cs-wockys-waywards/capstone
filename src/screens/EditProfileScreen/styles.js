import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#f2f2f3',
  },
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.3,
  },
  namesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 60,
    marginVertical: 5,
  },
  label: {
    flexGrow: 1,
    fontSize: 16,
    letterSpacing: 0.125,
    fontWeight: '500',
    lineHeight: 19,
    marginTop: 10,
    marginBottom: 15,
    paddingTop: 3,
  },
  input: {
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 0.35,
    borderBottomWidth: 1,
    borderBottomColor: '#132077',
    width: '65%',
    height: 30,
    marginBottom: 6,
    paddingLeft: 10,
  },
  pronounContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 60,
    marginVertical: 5,
  },
  dropdown: {},
  dropMenu: {
    width: '67%',
    alignSelf: 'flex-end',
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: '#d3d3d3',
    borderRadius: 300 / 2,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    height: 48,
    borderRadius: 45,
    backgroundColor: '#F81A51',
    width: 250,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Lato_700Bold',
    letterSpacing: 0.5,
  },
  interestsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
})
