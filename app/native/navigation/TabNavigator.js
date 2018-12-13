import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from '../containers/HomeScreen'
import LoginScreen from '../containers/LoginScreen'
import SettingsScreen from '../containers/SettingsScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => (
    <Text>H</Text>
  ),
}

const LoginStack = createStackNavigator({
  Login: LoginScreen,
})

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: () => (
    <Text>L</Text>
  ),
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: () => (
    <Text>S</Text>
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  // LoginStack,
  SettingsStack
})
