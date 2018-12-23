
import { createSwitchNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

import TabNavigator from './TabNavigator'
import LoginStack from './LoginNavigator'
import AuthStack from './AuthNavigator'

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    App: TabNavigator,
    Login: LoginStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
)
