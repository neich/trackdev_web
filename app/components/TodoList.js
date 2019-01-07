import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'

import Card from './Card'

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${styles.colors.title};

  margin-bottom: 8px;
`

class TodoList extends PureComponent {

  renderTodoTasks () {
    const { username, todoTasks } = this.props
    let todoTasksList = []

    for (let i=0; i<todoTasks.length; i++) {
      todoTasksList.push(
        <Fragment key={i}>
          <Title>
            {`${todoTasks[i].acronymAssignatura}  -  ${todoTasks[i].dataFiSprint}`}
          </Title>
          <Card
            title={todoTasks[i].nomTasca}
            description={todoTasks[i].descripcioTasca}
            state={todoTasks[i].estatTasca}
            bottomRightText={username}
          />
        </Fragment>
      )
    }
    return todoTasksList
  }

  render() {
    return (
      <Fragment>
        {this.renderTodoTasks()}
      </Fragment>
    )
  }

}

export default TodoList
