import React, { Component, Fragment } from 'react'
import styled from 'styled-components/native'

import TaskCard from './TaskCard'

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: black;

  margin-bottom: 8px;
`

const WrapperCard = styled.View`
  position: relative;

  background-color: #ff99cc;
  border-width: 1.5;
  border-color: white;
  border-radius: 8;

  overflow: hidden;

  margin-bottom: 16px;
`

const Descripcio = styled.Text`
  font-size: 14px;
  color: white;

  padding: 8px 16px;
`

class TaskList extends Component {
  constructor(props) {
    super(props)
  }

  renderTasks() {
    const { infoTasks } = this.props
    const tasks = []
    for (let i=0; i<infoTasks.tasques.length; i++) {
      tasks.push(
        <TaskCard
          key={i}
          nomTasca={infoTasks.tasques[i].nomTasca}
          descripcioTasca={infoTasks.tasques[i].descripcioTasca}
          nomAssignat={infoTasks.tasques[i].nomAssignat}
          estatTasca={infoTasks.tasques[i].estatTasca}
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
        <WrapperCard>
          <Descripcio>
            {infoTasks.descripcioHistoria}
          </Descripcio>
        </WrapperCard>
        <TitlePage>Tasques assignades:</TitlePage>
        {this.renderTasks()}
      </Fragment>
    )
  }
}

export default TaskList
