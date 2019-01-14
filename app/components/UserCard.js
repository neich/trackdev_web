import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'
import { Icon } from 'react-native-elements'

const WrapperCard = styled.View`
  position: relative;

  background-color: ${styles.colors.primary};
  border-width: 1.5;
  border-color: ${styles.colors.secondary};
  border-radius: 8;

  overflow: hidden;

  margin-bottom: 16px;

  flex-direction: row;
`

const ImageContent = styled.View`
  height: 80px;
  width: 80px;

  border-width: 2;
  border-color: ${styles.colors.secondary};
  border-radius: 80;

  background-color: ${styles.colors.subtitle};

  justify-content: center;
  align-items: center;
  
  margin: 16px;
`

const TextContent = styled.View`
  margin: 16px 0px;
`

const StyledText = styled.Text`
  font-size: 14px;
  
  margin-left: 4px;

  color: ${styles.colors.secondary};
`

const ReatioTextWrapper = styled.View`
  flex-direction: row;

  position: absolute;
  bottom: 0;
  right: 0;
  
  padding: 8px;
`

const RatioText = styled.Text`
  font-size: 14px;
  color: ${styles.colors.secondary};

  margin-left: 4px;
`

const WrapperText = styled.View`
  margin-top: 8px;
  flex-direction: row;
`

class UserCard extends PureComponent {
  render() {
    const { name, email, ratio } = this.props
    return (
      <WrapperCard>
        <ImageContent>
          <Icon name='insert-emoticon' size={64} color={styles.colors.title} />
        </ImageContent>
        
        <TextContent>
          <WrapperText>
            <Icon name='person' size={20} color={styles.colors.secondary} />
            <StyledText>{name} </StyledText>
          </WrapperText>
          <WrapperText>
            <Icon name='email' size={20} color={styles.colors.secondary} />
            <StyledText>{email} </StyledText>
          </WrapperText>
        </TextContent>
        { ratio &&
          <ReatioTextWrapper>
            <Icon name='work' size={20} color={styles.colors.secondary} />
            <RatioText>{ratio * 100} %</RatioText>
          </ReatioTextWrapper>
        }
      </WrapperCard>
    )
  }
}


export default UserCard
