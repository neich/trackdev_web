import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components/native'
import styles from '../utils/styles'
import { Icon } from 'react-native-elements'

const ButtonWrapper = styled.TouchableOpacity`
  position: relative;

  background-color: ${({colorInversion}) => colorInversion ? styles.colors.secondary : styles.colors.primary};
  border-width: 2;
  border-color: ${({colorInversion}) => colorInversion ? styles.colors.primary : styles.colors.secondary};
  border-radius: 8;

  overflow: hidden;

  flex-direction: row;
  justify-content: center;

  elevation: 2;

  ${({danger}) => danger && Danger}
  ${({floating}) => floating && Floating}
`

const Floating = css`
  position: absolute;

  width: 56px;
  height: 56px;
  border-radius: 28;

  flex: 1;
  align-items: center;

  bottom: 0;
  right: 0;
  margin: 16px 32px;

  elevation: 6;
`


const Danger = css`
  background-color: red;
`

const BottomRightText = styled.Text`
  position: absolute;
  color: ${({colorInversion}) => colorInversion ? styles.colors.primary : styles.colors.secondary};

  padding: 8px;

  bottom: 0;
  right: 0;
`

const TopRightText = styled.Text`
  position: absolute;
  color: ${({colorInversion}) => colorInversion ? styles.colors.primary : styles.colors.secondary};

  padding: 8px;

  top: 0;
  right: 0;
`

const BottomLeftText = styled.Text`
  position: absolute;
  color: ${({colorInversion}) => colorInversion ? styles.colors.primary : styles.colors.secondary};

  bottom: 0;
  left: 0;

  padding: 8px;
`

const Text = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({colorInversion}) => colorInversion ? styles.colors.primary : styles.colors.secondary};

  padding: 8px;
`

class Button extends PureComponent {
  render() {
    const { onPress, text, bottomLeftText, bottomRightText, topRightText, danger, children, icon, floating, colorInversion } = this.props
    return(
      <ButtonWrapper
        onPress={onPress}
        danger={danger}
        floating={floating}
        colorInversion={colorInversion}
      >
        {icon &&
          <Icon name={icon} size={24} color={colorInversion ? styles.colors.primary : styles.colors.secondary} />
        }
        {text && 
          <Text colorInversion={colorInversion} >{text} </Text>
        }
        <BottomLeftText colorInversion={colorInversion} >
          {bottomLeftText}
        </BottomLeftText>
        <BottomRightText colorInversion={colorInversion} >
          {bottomRightText}
        </BottomRightText>
        <TopRightText colorInversion={colorInversion} >
          {topRightText}
        </TopRightText>
        {children}
      </ButtonWrapper>
    )
  }
}

export default Button
