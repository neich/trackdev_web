import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import { tokenRequestAPI } from '../../utils/api'
import { handleLogoutAction } from '../../actions/authedUser'

class AuthScreen extends Component{
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Auth'
  }

  componentDidMount() {
    this._tokenNavigate()
  }

  _tokenNavigate = async () => {
    try {
      let userToken = await AsyncStorage.getItem('userToken')

      if (userToken) {
        let res = await tokenRequestAPI(userToken)
        if (!res.validToken) {
          await AsyncStorage.removeItem('userToken')
          this.props.dispatch(handleLogoutAction())

          this.props.navigation.navigate('Login')
        }
        else {
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

export default connect()(AuthScreen)
