import React, { Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { FormStyles } from '../native/styles/nativeStyles'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email:'alumne1@gmail.com',
      password:'alumne'
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(key, value) {
    this.setState(Object.assign(
      {},
      this.state,
      { [key]: value }))
  }

  onSubmit() {
    this.props.loginAction(this.state)
  }

  handlePressSignUp() {
    this.props.navigateSignUp()
  }

  render() {
    return(
      <View style={FormStyles.mainDiv}>
        <View style={FormStyles.inputGroup}>
          <Text >Usuari</Text>
          <TextInput
            onChangeText={(text) => this.onChange('email', text)}
            value={this.state.email}
          />
        </View>

        <View style={FormStyles.inputGroup}>
          <Text >Password</Text>
          <TextInput
            onChangeText={(text) => this.onChange('password', text)}
            value={this.state.password}
            secureTextEntry={true}
          />
        </View>
        <Button onPress={() => this.onSubmit()} title="Log in" />
        <View style={{height: 16}} />
        <Button onPress={() => this.handlePressSignUp()} title='Sign Up' />
      </View>
    )
  }
}

export default LoginForm
