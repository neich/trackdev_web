import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'

import Card from './Card'

const TitlePage = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${styles.colors.title};

  margin-bottom: 8px;
`

const Description = styled.Text`
  margin: 8px 16px 16px 24px;
`

class TaskList extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderTasks() {
    const { infoTasks } = this.props
    const tasks = []
    for (let i=0; i<infoTasks.tasques.length; i++) {
      tasks.push(
        <Card
          key={i}
          title={infoTasks.tasques[i].nomTasca}
          description={infoTasks.tasques[i].descripcioTasca}
          bottomRightText={infoTasks.tasques[i].nomAssignat || 'no assignat'}
          state={infoTasks.tasques[i].estatTasca}
        />
      )
    }
    return tasks
  }

  render() {
    const { infoTasks } = this.props
    return (
      <Fragment>
        <TitlePage>Descripció de la història:</TitlePage>
        <Description>{infoTasks.descripcioHistoria}</Description>
        <TitlePage>Tasques assignades:</TitlePage>
        {this.renderTasks()}
      </Fragment>
    )
  }
}

export default TaskList
