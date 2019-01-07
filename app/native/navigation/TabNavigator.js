import React from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import styles from '../../utils/styles'
import { Icon } from 'react-native-elements'

import CoursesScreen from '../containers/CoursesScreen'
import ToDoScreen from '../containers/ToDoScreen'
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
  tabBarIcon: ({tintColor}) => {
    return <Icon name='school' size={24} color={tintColor} /> //menu //apps //school //layers
  }
}


const ToDoStack = createStackNavigator({
  ToDo: ToDoScreen,
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
    headerTitleStyle: {width: Dimensions.get('window').width}
  })
})

ToDoStack.navigationOptions = {
  tabBarLabel: 'A fer',
  tabBarIcon: ({tintColor}) => {
    return <Icon name='assignment-late' size={24} color={tintColor} />
  }
}


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
  tabBarIcon: ({tintColor}) => {
    return <Icon name='person' size={24} color={tintColor} />
  }
}

// bottom tab navigator
export default createBottomTabNavigator({
  CoursesStack,
  ToDoStack,
  ProfileStack
},
{
  initialRouteName: 'ToDoStack',
  backBehavior: false,
  tabBarOptions: {
    activeTintColor: styles.colors.primary,
    inactiveTintColor: styles.colors.subtitle,
    activeBackgroundColor: styles.colors.secondary,
    inactiveBackgroundColor: styles.colors.secondary
  }
})
