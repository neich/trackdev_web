import React, { Component } from 'react'
import { Button, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { handleLogoutAction } from '../../actions/authedUser'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding: 16px;
`

class SettingsScreen extends Component{
  _submitLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    this.props.dispatch(handleLogoutAction())
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Wrapper>
        <Button onPress={() => this._submitLogout()} title='Log Out' />
      </Wrapper>
    )
  }

}

export default connect()(SettingsScreen)
