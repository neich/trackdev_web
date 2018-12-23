
import { createStackNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

import AuthScreen from '../auth/AuthScreen'

export default createStackNavigator({
  Auth: AuthScreen
},
{
  navigationOptions: () => ({
    title: '',
    headerTitleStyle: {width: Dimensions.get('window').width}
  })
})