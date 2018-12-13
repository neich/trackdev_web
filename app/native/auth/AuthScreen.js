import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { tokenRequestAPI } from '../../utils/api'
import { handleLogoutAction } from '../../actions/authedUser'

class AuthScreen extends Component{
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Auth'
  }

  componentDidMount() {
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    try {
      let userToken = await AsyncStorage.getItem('userToken')

      if (userToken) {
        let res = await tokenRequestAPI(userToken)
        if (!res.validToken) {
          await AsyncStorage.removeItem('userToken')
          this.props.dispatch(handleLogoutAction())

          this.props.navigation.navigate('Login')
        }
        else {
          this.props.navigation.navigate('Main')
        }
      }
      else {
        this.props.navigation.navigate('Login')
      }
    }
    catch (e) {
      console.log('error desconegut')
    }

  }

  render() {
    return (
      <View>
        <Text>Carregant...</Text>
      </View>
    )
  }

}

function mapStateProps ({ authedUser }) {
  let username;
  authedUser ? username =  authedUser.name : null;
  return {
      notLogged: authedUser === null,
      username: username
  }
}

export default connect(mapStateProps)(AuthScreen)
