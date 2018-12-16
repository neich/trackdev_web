import React, { Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { FormStyles } from '../native/styles/nativeStyles'
import { handleLoginAction } from '../actions/authedUser'
import { connect } from 'react-redux'

class LoginForm extends Component{
  constructor(props) {
    super(props)

     this.state = {
        email:'admin@gmail.com',
        password:'admin'
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(key, value) {
    this.setState(Object.assign(
      {},
      this.state,
      { [key]: value }))
  }

  async onSubmit() {
    try {
      let res = await this.props.dispatch(handleLoginAction(this.state))
      
      //props.navigate es la funció que fa la route (en mobil ho ha de fer navigation, es tracta al container de cada plataforma)
      if (res.id) {
          if (this.props.navigateOK) this.props.navigateOK(res.token) 
      }
      else if (res.error) {
          if (this.props.navigateFail) this.props.navigateFail(res.error.message)
      }
      else if (res.message) {
          if (this.props.navigateFail) this.props.navigateFail(res.message)
      }

      console.log('---------------------------------------------------------------------')
      console.log(res)
      console.log('---------------------------------------------------------------------')

    }
    catch( err ) {
      console.log('vaia drama!!!')
    }
    
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

export default connect()(LoginForm)
