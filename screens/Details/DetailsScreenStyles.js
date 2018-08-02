import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  imageContainer: {
    flex: 1
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '25%',
    // margin: 10,
    borderRadius: 4
  }
})
