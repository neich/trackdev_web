import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { tokenRequestAPI } from '../../utils/api'
import { handleLogoutAction, setAuthedUser } from '../../actions/authedUser'

const WrapperScreen = styled.ScrollView.attrs({ showsVerticalScrollIndicator: false })`
  padding: 16px;
  background-color: white;
  height: 100%;
`

class AuthScreen extends Component{
  componentDidMount () {
    this._tokenNavigate()
  }

  _tokenNavigate = async () => {
    try {
      let userToken = await AsyncStorage.getItem('userToken')

      if (userToken) { // si hi ha token
        let res = await tokenRequestAPI(userToken)
        if (!res.validToken) { //si no es valid logout
          this.props.logoutAction()
          this.props.navigation.navigate('Login')
        }
        else { //si es valid entra a la app
          const user = {
            id: res.user.id,
            name: res.user.name,
            email: res.user.email,
            token: userToken
          }
          this.props.setUserRedux(user)
          this.props.navigation.navigate('App')
        }
      }
      else { 
        this.props.navigation.navigate('Login')
      }
    }
    catch (e) {
      console.log('Error de resposta del servidor - (Comprova la connectivitat)')
    }

  }

  render() {
    return (
      <WrapperScreen />
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  setUserRedux: (user) => dispatch(setAuthedUser(user)),
  logoutAction: () => dispatch(handleLogoutAction())
})

export default connect(null, mapDispatchToProps)(AuthScreen)
