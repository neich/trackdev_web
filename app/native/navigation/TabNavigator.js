import React from 'react'
import { Text, Dimensions } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from '../containers/HomeScreen'
//import SignUpScreen from '../containers/SignUpScreen'
import SettingsScreen from '../containers/SettingsScreen'
import SprintsScreen from '../containers/SprintsScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Sprints: SprintsScreen
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
    headerTitleStyle: {width: Dimensions.get('window').width}
  })
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => (
    <Text>H</Text>
  ),
}

/*

const SignUpStack = createStackNavigator({
  SignUp: SignUpScreen,
})

SignUpStack.navigationOptions = {
  tabBarLabel: 'Sign Up',
  tabBarIcon: () => (
    <Text>E</Text>
  ),
}
*/

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
    headerTitleStyle: {width: Dimensions.get('window').width}
  })
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: () => (
    <Text>S</Text>
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  //SignUpStack,
  SettingsStack
},
{
  initialRouteName: 'HomeStack'
})
