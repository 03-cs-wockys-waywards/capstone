import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    marginHorizontal: '10%',
    marginTop: '10%',
    height: '100%',
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
  },
  labelText: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: '#d3d3d3',
  },
  button: {
    height: 48,
    borderRadius: 45,
    backgroundColor: '#136360',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  confirmButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    bottom: '15%',
  },
});
