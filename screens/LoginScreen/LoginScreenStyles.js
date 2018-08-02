import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  },
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center'
  },
  LinerGradientStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  Image: {
    height: width * 0.25,
    width: width * 0.25,
    marginTop: height * 0.2
  },
  content: {
    height: height * 0.3,
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginTop: 25
  },
  usernameStyle: {
    marginTop: 25,
    borderBottomColor: 'white'
  },
  passwordStyle: {
    marginTop: 20,
    borderBottomColor: 'white'
  },
  signinStyle: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 3,
    marginTop: 40
  },
  textButton: {
    color: 'black',
    fontSize: 18
  }
})
