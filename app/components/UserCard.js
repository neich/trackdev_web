import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'

const WrapperCard = styled.View`
  position: relative;

  background-color: ${styles.colors.primary};
  border-width: 1.5;
  border-color: ${styles.colors.secondary};
  border-radius: 8;

  overflow: hidden;

  margin-bottom: 16px;

  flex: 1;
  flex-direction: row;
`

const ImageContent = styled.View`
  height: 80px;
  width: 80px;

  border-width: 2;
  border-color: ${styles.colors.secondary};
  border-radius: 80;

  background-color: grey;

  margin: 16px;
`

const TextContent = styled.View`
  margin: 16px 0px;
`

const StyledText = styled.Text`
  font-size: 14px;
  padding-top: 8px;
  color: ${styles.colors.secondary};
`

const RatioText = styled.Text`
  font-size: 14px;
  color: ${styles.colors.secondary};

  position: absolute;
  bottom: 0;
  right: 0;
  
  padding: 8px;
`

class UserCard extends PureComponent {
  render() {
    const { name, email, ratio } = this.props
    return (
      <WrapperCard>
        <ImageContent>

        </ImageContent>
        <TextContent>
          <StyledText>{name}</StyledText>
          <StyledText>{email}</StyledText>
        </TextContent>
        { ratio &&
          <RatioText>{ratio * 100} %</RatioText>
        }
      </WrapperCard>
    )
  }
}


export default UserCard
