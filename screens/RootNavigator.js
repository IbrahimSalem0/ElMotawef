import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: <Text>Motawef</Text>
    }
  }
})

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: HomeScreen,
    navigationOptions: {
      // headerTitle: I18n.t('Login')
    }
  }
})

export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'App'
  }
)
