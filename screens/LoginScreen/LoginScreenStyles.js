import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'transparent'
  },
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25
  },
  LinerGradientStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  Image: {
    height: width * 0.4,
    width: width * 0.4,
    marginTop: height * 0.06
  },
  Title:{
    textAlign: 'center',
    fontSize: 38,
    color: '#FE979C'
  },
  content: {
    height: height * 0.5,
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginTop: 25
  },
  usernameStyle: {
    marginTop: 25,
    borderBottomColor: 'white',
    borderColor: 'white',
    borderWidth: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.19,
    shadowRadius: 6,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 25
  },
  passwordStyle: {
    marginTop: 20,
    borderBottomColor: 'white',
    borderColor: 'white',
    borderWidth: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.19,
    shadowRadius: 6,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 25
  },
  signinStyle: {
    backgroundColor: '#FE979C',
    marginHorizontal: 10,
    borderRadius: 3,
    marginTop: 100,
    borderRadius: 25
  },
  textButton: {
    color: 'white',
    fontSize: 18
  }
})
