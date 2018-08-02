import React from 'react'
import RootNavigator from './screens/RootNavigator'
import { Provider as PaperProvider } from 'react-native-paper'

export default class App extends React.Component {
  render () {
    return (
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    )
  }
}
