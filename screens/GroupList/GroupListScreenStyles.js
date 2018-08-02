import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  item: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
    marginHorizontal: 10,
    marginTop: 10
  },
  container: {
    flexDirection: 'row',
    padding: 5
  },
  imagecontainer: {
    width: '40%',
    alignSelf: 'stretch'
  },
  nameContainer: {
    padding: 5,
    paddingHorizontal: 10
  },
  cardStyle: {
    flexDirection: 'row',
    marginTop: 8
  }
})
