
import { createSwitchNavigator } from 'react-navigation'

import TabNavigator from './TabNavigator'
import LoginStack from './LoginNavigator'
import AuthScreen from '../auth/AuthScreen'

export default createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    App: TabNavigator,
    Login: LoginStack,
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Auth'
  }
)