import React from 'react'
import { Button, AsyncStorage } from 'react-native'
import styled from 'styled-components/native'

import { handleLogoutAction } from '../../actions/authedUser'
import { connect } from 'react-redux'


const WrapperScreen = styled.View`
  padding: 16px;
`

const Space = styled.View`
  height: 16px;
`

class HomeScreen extends React.Component {

  _submitLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    this.props.dispatch(handleLogoutAction())
    this.props.navigation.navigate('Login')
  }
// this.props.navigation.navigate('App')
  render() {
    return (
      <WrapperScreen>
        <Button onPress={() => this._submitLogout()} title='Log Out' />
        <Space />
        <Button onPress={() => this.props()} title='CRASH APP (to reload)' />
      </WrapperScreen>
    )
  }

}

export default connect()(HomeScreen)
