import React from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import PropTypes from 'prop-types'
import {FormStyles} from '../native/styles/nativeStyles'

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      pwd:'',
      correu:'',
      tipus:3,
      codiUdg:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
    /*
      let token = paramToken;
      this.props.userRegisterRequest(token).then(
        ()=>{},
        (data)=>this.setState({errors:data})
      );

    */
  }

  onChange(key, value) {
    this.setState(Object.assign(
      {},
      this.state,
      { [key]: value }))
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userRegisterRequest(this.state).then(
      ()=>{},
      (data)=>this.setState({errors:data})
    );
    console.log(this.state);
  }

  codiUdgForm() {
    return (
      <View style={FormStyles.inputGroup}>
        <Text>Codi Udg</Text>
        <TextInput
          value={this.state.codiUdg}
          onChangeText={(text) => this.onChange('codiUdg', text)}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={FormStyles.mainDiv}>
        <View style={FormStyles.inputGroup}>
          <Text>Correu</Text>
          <TextInput
            value={this.state.correu}
            onChangeText={(text) => this.onChange('correu', text)}
          />

        </View>
        <View style={FormStyles.inputGroup}>
          <Text>Username</Text>
          <TextInput
            value={this.state.username}
            onChangeText={(text) => this.onChange('username', text)}
          />
        </View>
        <View style={FormStyles.inputGroup}>
          <Text>Password</Text>
          <TextInput
            value={this.state.pwd}
            onChangeText={(text) => this.onChange('pwd', text)}
            secureTextEntry={true}
          />
         
        </View>
        {this.state.tipus === 3 && this.codiUdgForm()}
         <Button onPress={this.onSubmit} title='Sign Up'>
         </Button>
      </View>
    )
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired
}


export default RegisterForm;