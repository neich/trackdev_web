import React, { Component } from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { handleLogoutAction } from '../../actions/authedUser'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding: 16px;
`

const Space = styled.View`
  height: 16px;
`

class SettingsScreen extends Component{
  constructor(props) {
    super(props)
  
  }

  shouldComponentUpdate(nextProps) {
    const { navigation, email } = nextProps
    if (!email) {
      navigation.navigate('Login')
    }
    return false
  }

  render() {
    const { logoutAction } = this.props
    return (
      <Wrapper>
        <Button onPress={() => this.props()} title='CRASH APP (to reload)' />
        <Space />
        <Button onPress={() => logoutAction()} title='Log Out' />
      </Wrapper>
    )
  }

}

const mapStateToProps = (state) => ({
  email: state.authedUser.email
})

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => dispatch(handleLogoutAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
