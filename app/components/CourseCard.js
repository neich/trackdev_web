import React, { Component } from 'react'
import styled from 'styled-components'
import styles from '../utils/styles'

const ButtonWrapper = styled.TouchableOpacity`
  position: relative;

  background-color: ${styles.colors.primary};
  border-width: 1.5;
  border-color: ${styles.colors.secondary};
  border-radius: 8;

  overflow: hidden;

  elevation: 2;
`

const Title = styled.Text`
  text-align: center;

  font-size: 18px;
  font-weight: 500;
  color: ${styles.colors.secondary};

  padding: 56px 8px;
`

const Credits = styled.Text`
  position: absolute;
  color: ${styles.colors.secondary};

  padding: 8px;

  bottom: 0;
  right: 0;
`

const Data = styled.Text`
  position: absolute;
  color: ${styles.colors.secondary};

  padding: 8px;

  top: 0;
  right: 0;
`

const NomProfessors = styled.Text`
  position: absolute;
  color: ${styles.colors.secondary};

  bottom: 0;
  left: 0;

  padding: 8px;

`

class CourseCard extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { onPress, title, professors, credits, dataInici, dataFi } = this.props
    return(
      <ButtonWrapper onPress={onPress}>
        <Title>
          {title}
        </Title>
        <NomProfessors>
          {professors.join('\n')}
        </NomProfessors>
        <Credits>
          {credits} ECTS
        </Credits>
        <Data>
          {dataInici} - {dataFi}
        </Data>
      </ButtonWrapper>
    )
  }
}

export default CourseCard
