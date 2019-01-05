import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'

import Card from './Card'

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: black;

  margin-bottom: 8px;
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
        <Card description={infoTasks.descripcioHistoria} />
        <TitlePage>Tasques assignades:</TitlePage>
        {this.renderTasks()}
      </Fragment>
    )
  }
}

export default TaskList
