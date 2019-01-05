import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components/native'
import styles from '../utils/styles'

const ButtonWrapper = styled.TouchableOpacity`
  position: relative;

  background-color: ${styles.colors.primary};
  border-width: 2;
  border-color: ${styles.colors.secondary};
  border-radius: 8;

  overflow: hidden;

  elevation: 2;

  ${({danger}) => danger && Danger}
`

const Danger = css`
  background-color: red;
`

const BottomRightText = styled.Text`
  position: absolute;
  color: ${styles.colors.secondary};

  padding: 8px;

  bottom: 0;
  right: 0;
`

const TopRightText = styled.Text`
  position: absolute;
  color: ${styles.colors.secondary};

  padding: 8px;

  top: 0;
  right: 0;
`

const BottomLeftText = styled.Text`
  position: absolute;
  color: ${styles.colors.secondary};

  bottom: 0;
  left: 0;

  padding: 8px;
`

const Text = styled.Text`
  text-align: center;

  font-size: 18px;
  font-weight: 500;
  color: ${styles.colors.secondary};

  padding: 8px;
`

class Button extends PureComponent {
  render() {
    const { onPress, text, bottomLeftText, bottomRightText, topRightText, danger, children } = this.props
    return(
      <ButtonWrapper
        onPress={onPress}
        danger={danger}
      >
        {text && 
          <Text>{text}</Text>
        }
        <BottomLeftText>
          {bottomLeftText}
        </BottomLeftText>
        <BottomRightText>
          {bottomRightText}
        </BottomRightText>
        <TopRightText>
          {topRightText}
        </TopRightText>
        {children}
      </ButtonWrapper>
    )
  }
}

export default Button
