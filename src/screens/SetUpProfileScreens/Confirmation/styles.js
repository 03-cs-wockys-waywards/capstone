import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: '10%',
    height: '100%',
    paddingBottom: '10%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: '10%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    marginBottom: 5,
  },
  subheadingText: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 15,
    lineHeight: 30,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 36,
    paddingLeft: 15,
  },
  pronounText: {
    fontSize: 18,
    color: '#7a7a7a',
    lineHeight: 30,
    paddingLeft: 15,
  },
  labelText: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
  },
  profilePreviewContainer: {
    margin: 15,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '100%',
    height: '80%',
    backgroundColor: '#d3d3d3',
  },
  profileInfoContainer: {
    position: 'absolute',
    bottom: '2.5%',
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 15,
    paddingVertical: '2%',
  },
  interestsContainer: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  button: {
    height: 48,
    borderRadius: 45,
    backgroundColor: '#136360',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  confirmButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '5%',
  },
});
