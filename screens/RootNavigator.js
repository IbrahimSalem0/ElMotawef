import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'
import MotawefHomeScreen from './MotawefHomeScreen'
import Details from './Details'
import LoginScreen from './LoginScreen'
import GroupListScreen from './GroupList'

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details'
    }
  },
  MotawefHome: {
    screen: MotawefHomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  GroupList: {
    screen: GroupListScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  MotawefHome: {
    screen: MotawefHomeScreen
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
    initialRouteName: 'Auth'
  }
)
