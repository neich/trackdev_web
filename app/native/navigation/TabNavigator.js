import React from 'react'
import { Text, Dimensions } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import styles from '../../utils/styles'

import CoursesScreen from '../containers/CoursesScreen'
//import SignUpScreen from '../containers/SignUpScreen'
import ProfileScreen from '../containers/ProfileScreen'
import SprintsScreen from '../containers/SprintsScreen'
import TasksScreen from '../containers/TasksScreen'
import GroupUsersScreen from '../containers/GroupUsersScreen'

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen,
  Sprints: SprintsScreen,
  Tasks: TasksScreen,
  GroupUsers: GroupUsersScreen
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
    headerTitleStyle: {width: Dimensions.get('window').width}
  })
})

CoursesStack.navigationOptions = {
  tabBarLabel: 'Cursos',
  tabBarIcon: () => (
    <Text>C</Text>
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

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
    headerTitleStyle: {width: Dimensions.get('window').width}
  })
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: () => (
    <Text>P</Text>
  ),
}

export default createBottomTabNavigator({
  CoursesStack,
  //SignUpStack,
  ProfileStack
},
{
  initialRouteName: 'ProfileStack',
  backBehavior: false,
  tabBarOptions: {
    activeTintColor: styles.colors.primary,
    activeBackgroundColor: styles.colors.secondary,
  }
})
