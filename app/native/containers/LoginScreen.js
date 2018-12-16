import React, { Component } from 'react'
import { Alert, AsyncStorage } from 'react-native'
import LoginForm from '../../components/LoginForm'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding: 16px;
`

class LoginPage extends Component {

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

  render() {
    return (
      <Wrapper>
        <LoginForm
          navigateOK={this._signInAsync}
          navigateFail={this._error}
          navigateSignUp={() => this.props.navigation.navigate('Signup')}
        /> 
      </Wrapper>
    )
  }
}

export default LoginPage