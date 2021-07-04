import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
})
