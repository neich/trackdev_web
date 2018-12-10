import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

class AuthScreen extends Component{
  constructor(props) {
    super(props);
    this._bootstrapAsync()
  }

  static navigationOptions = {
    title: 'Auth'
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Login')
  }

  render() {
    return (
      <View>
        <Text>Carregant...</Text>
      </View>
    )
  }

}

export default AuthScreen
