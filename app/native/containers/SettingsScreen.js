import React, { Component } from 'react'
import { View, Button, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { handleLogoutAction } from '../../actions/authedUser'

class SettingsScreen extends Component{
  static navigationOptions = {
    title: 'Settings'
  }

  _submitLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    this.props.dispatch(handleLogoutAction())
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View>
        <Button onPress={() => this._submitLogout()} title='Logout' />
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

export default connect(mapStateProps)(SettingsScreen)
