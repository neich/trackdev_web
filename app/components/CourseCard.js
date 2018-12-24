import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.TouchableOpacity`
  position: relative;

  background-color: orange;
  border-width: 1.5;
  border-color: white;
  border-radius: 8;

  overflow: hidden;

  elevation: 2;
`

const Title = styled.Text`
  text-align: center;

  font-size: 20px;
  font-weight: 500;
  color: white;

  padding: 56px 8px;
`

const Credits = styled.Text`
  position: absolute;
  color: white;

  padding: 8px;

  bottom: 0;
  right: 0;
`

const Data = styled.Text`
  position: absolute;
  color: white;

  padding: 8px;

  top: 0;
  right: 0;
`

const NomProfessors = styled.Text`
  position: absolute;
  color: white;

  bottom: 0;
  left: 0;

  padding: 8px;

`

class CourseCard extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { title, professors, credits, dataInici, dataFi } = this.props
    return(
      <ButtonWrapper>
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
