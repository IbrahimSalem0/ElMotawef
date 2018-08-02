import React from 'react'
import RootNavigator from './screens/RootNavigator'
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadingCompelete: false
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig)
    }
  }
  render () {
    return <RootNavigator />
  }
}
