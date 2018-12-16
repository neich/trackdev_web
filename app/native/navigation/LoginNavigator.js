
import { createStackNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

import LoginScreen from '../containers/LoginScreen'
import SignUpScreen from '../containers/SignUpScreen'

export default createStackNavigator({
  Login: LoginScreen,
  Signup: SignUpScreen
},
{
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.routeName}`,
    headerTitleStyle: {width: Dimensions.get('window').width}
  })
})
