import React, { Component } from 'react'
import { View, Alert, AsyncStorage } from 'react-native'
import PropTypes from 'prop-types'
import LoginForm from '../../components/LoginForm'
import { connect } from 'react-redux'
import { userLoginRequest } from '../../actions/loginActions'

class LoginPage extends Component{
  static navigationOptions = {
    title: 'Log in'
  }

  render() {
    const { userLoginRequest } = this.props;
    return (
      <View>
        <LoginForm
          userLoginRequest={userLoginRequest}
          navigateOK={this._signInAsync}
          navigateFail={this._error}
        /> 
      </View>
    )
  }

  _signInAsync = async (token) => {
    await AsyncStorage.setItem('userToken', token)
    this.props.navigation.navigate('App')
  }

  _error = (msg) => {
    Alert.alert(
      'Login Failed!',
      msg,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

}

LoginPage.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

export default connect(null, {userLoginRequest})(LoginPage)