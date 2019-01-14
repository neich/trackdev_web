import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'
import { Icon } from 'react-native-elements'

import Card from './Card'

const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${styles.colors.title};
  margin-left: 4px;
  
`

const WrapperText = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
  flex-direction: row;
`


class TodoList extends PureComponent {

  renderTodoTasks () {
    const { username, todoTasks } = this.props
    let todoTasksList = []

    for (let i=0; i<todoTasks.length; i++) {
      todoTasksList.push(
        <Fragment key={i}>
          <WrapperText>
            <Icon name='date-range' size={24} color={styles.colors.title} />
            <Title>{todoTasks[i].acronymAssignatura} - </Title>
            <Title>{todoTasks[i].dataFiSprint} 0</Title>
          </WrapperText>
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

