import React, { Component } from 'react'
import { Alert } from 'react-native'
import LoginForm from '../../components/LoginForm'
import styled from 'styled-components/native'
import styles from '../../utils/styles'
import { connect } from 'react-redux'
import { handleLoginAction } from '../../actions/authedUser'
import { removeError } from '../../actions/error'

const Wrapper = styled.View`
  padding: 16px;
  background-color: ${styles.colors.secondary};
  height: 100%;
`

class LoginPage extends Component {

  shouldComponentUpdate(nextProps) {
    const { navigation, idUser, error, removeError } = nextProps
    if (idUser) {
      navigation.navigate('App')
    }

    if (error !== null) {
      this._error(error)
      removeError()
    }

    return false;
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
          loginAction={this.props.loginAction}
          navigateSignUp={() => this.props.navigation.navigate('Signup')}
        /> 
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  idUser: state.authedUser.id,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  loginAction: (user) => dispatch(handleLoginAction(user)),
  removeError: () => dispatch(removeError())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
