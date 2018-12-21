import React, { Component } from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { handleLogoutAction } from '../../actions/authedUser'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding: 16px;
`

class SettingsScreen extends Component{
  constructor(props) {
    super(props)
  
  }

  componentDidUpdate() {
    const { navigation, email } = this.props
    if (!email) {
      navigation.navigate('Login')
    }
  }

  render() {
    const { logoutAction } = this.props
    return (
      <Wrapper>
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
