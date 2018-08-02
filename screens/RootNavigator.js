import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'
import MotawefHomeScreen from './MotawefHomeScreen'
import LoginScreen from './LoginScreen'

const AppStack = createStackNavigator({
  MotawefHome: {
    screen: MotawefHomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  }
})

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
})

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
)
