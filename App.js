import React from 'react'
import RootNavigator from './screens/RootNavigator'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f1c40f',
    accent: '#3498db'
  }
}
export default class App extends React.Component {
  render () {
    return (
      <PaperProvider theme={theme}>
        <RootNavigator />
      </PaperProvider>
    )
  }
}
