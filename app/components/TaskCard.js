import React, { PureComponent } from 'react'
import styled from 'styled-components/native'

const WrapperCard = styled.View`
  position: relative;

  background-color: #ff99cc;
  border-width: 1.5;
  border-color: white;
  border-radius: 8;

  overflow: hidden;

  margin-bottom: 16px;
`

const AfterWrapperCard = styled.TouchableOpacity`
  position: absolute;
  height: 32px;
  width: 32px;
  
  border-width: 2;
  border-color: #ff99cc;
  border-radius: 8;

  top: 0;
  right: 0;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: white;
`

const BeforeWrapperCard = styled.View`
  height: 12px;
  width: 12px;
  background-color: ${({estatTasca}) => estatTasca === 0 ? 'red' : estatTasca === 1 ? 'yellow' : 'green'};

  border-radius: 6;

`

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: white;

  padding: 16px 16px 8px 16px;
`

const DescripcioTasca = styled.Text`
  font-size: 14px;
  color: white;

  padding: 0px 32px 32px 32px;
`

const NomAlumne = styled.Text`
  position: absolute;
  color: white;

  padding: 8px;

  bottom: 0;
  right: 0;
`

class TaskCard extends PureComponent {
  render() {
    const { nomTasca, descripcioTasca, nomAssignat, estatTasca } = this.props
    return (
      <WrapperCard>
        <Title>{nomTasca}</Title>
        <DescripcioTasca>{descripcioTasca}</DescripcioTasca>
        { nomAssignat ?
          <NomAlumne>{nomAssignat}</NomAlumne>
            :
          <NomAlumne>no assignat</NomAlumne>
        }
        <AfterWrapperCard>
          <BeforeWrapperCard estatTasca={estatTasca} />
        </AfterWrapperCard>
      </WrapperCard>
    )
  }
}

export default TaskCard
