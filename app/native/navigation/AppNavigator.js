
import { createSwitchNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import AuthStack from './LoginNavigator'

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
)