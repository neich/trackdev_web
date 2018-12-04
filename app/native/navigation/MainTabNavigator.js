import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from '../containers/HomeScreen'
import SecondScreen from '../containers/SecondScreen'
import LoginScreen from '../containers/LoginScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => (
    <Text>H</Text>
  ),
}

const SecondStack = createStackNavigator({
  Second: SecondScreen,
})

SecondStack.navigationOptions = {
  tabBarLabel: 'Second',
  tabBarIcon: () => (
    <Text>S</Text>
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

export default createBottomTabNavigator({
  HomeStack,
  SecondStack,
  LoginStack,
})
