import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { tokenRequestAPI } from '../../utils/api'
import { handleLogoutAction, setAuthedUser } from '../../actions/authedUser'

class AuthScreen extends Component{
  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    title: 'Auth'
  }

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
            name: 'problemes',
            email: res.email,
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
      <View>
        <Text>Carregant...</Text>
      </View>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  setUserRedux: (user) => dispatch(setAuthedUser(user)),
  logoutAction: () => dispatch(handleLogoutAction())
})

export default connect(null, mapDispatchToProps)(AuthScreen)
