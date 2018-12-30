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
`

const AfterWrapperCard = styled.TouchableOpacity`
  position: absolute;
  height: 32px;
  width: 32px;
  
  border-width: 2;
  border-color: ${styles.colors.primary};
  border-radius: 8;

  top: 0;
  right: 0;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${styles.colors.secondary};
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
  color: ${styles.colors.secondary};

  padding: 16px 16px 8px 16px;
`

const DescripcioTasca = styled.Text`
  font-size: 14px;
  color: ${styles.colors.secondary};

  padding: 0px 32px 32px 32px;
`

const NomAlumne = styled.Text`
  position: absolute;
  color: ${styles.colors.secondary};

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
