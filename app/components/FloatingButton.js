import React, { Component } from 'react'
import styled from 'styled-components/native'

import styles from '../utils/styles'

const Wrapper = styled.TouchableOpacity`
  position: absolute;

  background-color: ${styles.colors.secondary};
  
  width: 56px;
  height: 56px;
  border-radius: 28;
  border-width: 2;
  border-color: ${styles.colors.primary};

  flex: 1;
  justify-content: center;
  align-items: center;

  bottom: 0;
  right: 0;
  margin: 16px 32px;

  elevation: 6;
`

const Content = styled.Text`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: ${styles.colors.primary};
`

class FloatingButton extends Component {
  render() {
    const { content, handleOnPress } = this.props
    return (
      <Wrapper onPress={() => handleOnPress()} >
        <Content>{content}</Content>
      </Wrapper>
    )
  }
}

export default FloatingButton
