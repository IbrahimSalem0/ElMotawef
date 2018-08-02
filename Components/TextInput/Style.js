import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  input: {
    fontSize: 14,
    flex: 1,
    height: 30
  },
  icon: {
    color: 'grey',
    marginRight: 7
  },
  error: {
    fontSize: 15,
    textAlign: 'right',
    marginRight: 10
  }
})
