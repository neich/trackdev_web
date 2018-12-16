import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import RegisterForm from '../../components/RegisterForm'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  padding: 16px;
`

class SignUpScreen extends PureComponent {
  render() {
    return (
      <Wrapper>
        <ScrollView>
          <RegisterForm /> 
        </ScrollView>
      </Wrapper>
    )
  }
}

export default SignUpScreen
