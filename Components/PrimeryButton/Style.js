import { StyleSheet } from 'react-native'
// import Theme from '../../Config/Theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 1,
    borderRadius: 3,
    alignSelf: 'stretch',
    overflow: 'hidden'
  },
  text: {
    fontSize: 14,
    backgroundColor: 'transparent',
    color: 'white',
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  horizontal: {
    justifyContent: 'center'
  },
  LinerGradientStyle: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  contentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

})
