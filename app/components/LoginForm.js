import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import { FormStyles } from '../native/styles/nativeStyles'
import styles from '../utils/styles'

import Button from '../components/Button'

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
      <View>
        <View style={FormStyles.inputGroup}>
          <Text>Usuari</Text>
          <TextInput
            onChangeText={(text) => this.onChange('email', text)}
            value={this.state.email}
            placeholderTextColor={styles.colors.primary}
            selectionColor={styles.colors.primary}
            underlineColorAndroid={styles.colors.primary}
          />
        </View>

        <View style={FormStyles.inputGroup}>
          <Text>Contrasenya</Text>
          <TextInput
            onChangeText={(text) => this.onChange('password', text)}
            value={this.state.password}
            secureTextEntry={true}
            placeholderTextColor={styles.colors.primary}
            selectionColor={styles.colors.primary}
            underlineColorAndroid={styles.colors.primary}
          />
        </View>
        <Button onPress={() => this.onSubmit()} text="LOG IN" icon={'exit-to-app'} />
      </View>
    )
  }
}

export default LoginForm
