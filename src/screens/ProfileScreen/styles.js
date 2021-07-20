import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBEBFB',
    justifyContent: 'center',
  },
  scrollContainer: {
    marginTop: '10%',
    paddingBottom: '15%',
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
    fontWeight: '700',
    lineHeight: 36,
    paddingLeft: 15,
    marginRight: 10,
  },
  pronounText: {
    fontSize: 18,
    color: '#7a7a7a',
    lineHeight: 30,
    paddingLeft: 15,
    marginBottom: 8,
    marginTop: -6,
  },
  labelText: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 15,
    marginBottom: 15,
  },
  profilePreviewContainer: {
    margin: 25,
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 3 },
    shadowOpacity: 0.3,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '100%',
    height: 600,
    backgroundColor: '#d3d3d3',
    shadowRadius: 3,
  },
  imageStyle: {
    borderRadius: 15,
  },
  profileInfoContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 15,
    paddingVertical: '2%',
    marginHorizontal: '5%',
  },
  interestsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
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
