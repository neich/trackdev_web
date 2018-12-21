import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'


const WrapperScreen = styled.View`
  padding: 16px;
`

const Space = styled.View`
  height: 16px;
`

class HomeScreen extends React.Component {

  render() {
    return (
      <WrapperScreen>
        <Space />
        <Button onPress={() => this.props()} title='CRASH APP (to reload)' />
      </WrapperScreen>
    )
  }

}

export default HomeScreen
