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

  padding: 16px;

  margin-bottom: 16px;
`

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${styles.colors.secondary};

  padding: 8px;
  margin-right: 32px;
`

const Description = styled.Text`
  font-size: 14px;
  color: ${styles.colors.secondary};

  padding: 0px 24px;
  margin-bottom: 16px;
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

const AfterWrapperCard = styled.TouchableOpacity`
  position: absolute;
  height: 32px;
  width: 32px;
  
  border-width: 2;
  border-color: ${styles.colors.primary};
  border-radius: 8;

  top: 8;
  right: 8;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${styles.colors.secondary};
`

const BeforeWrapperCard = styled.View`
  height: 12px;
  width: 12px;
  background-color: ${({state}) => state === 0 ? 'red' : state === 1 ? 'yellow' : 'green'};

  border-radius: 6;
`

class Card extends PureComponent {
  render() {
    const { title, description, topRightText, bottomRightText, state, children } = this.props
    return (
      <WrapperCard>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {topRightText && <TopRightText>{topRightText}</TopRightText>}
        {bottomRightText && <BottomRightText>{bottomRightText}</BottomRightText>}
        {state >= 0 &&
          <AfterWrapperCard>
            <BeforeWrapperCard state={state} />
          </AfterWrapperCard>
        }
        {children}
      </WrapperCard>
    )
  }
}

export default Card
