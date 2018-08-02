import { StyleSheet, Dimensions } from 'react-native'
var { width } = Dimensions.get('window')

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  homeHeaderText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  homeList: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  homeFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeFooterText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {},
  title: {}
})
