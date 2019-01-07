import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import styles from '../../utils/styles'
import { handleGetTodoTasks, resetTodoTasks } from '../../actions/tasks'

import TodoList from '../../components/TodoList'

const WrapperScreen = styled.ScrollView.attrs({ showsVerticalScrollIndicator: false })`
  padding: 16px;
  background-color: ${styles.colors.secondary};
  height: 100%;
`

class ToDoScreen extends Component {

  static navigationOptions = () => ({
    title: 'Tasques a fer'
  })

  componentWillMount() {
    const { handleGetTodoTasks, userId } = this.props
    handleGetTodoTasks(userId)
  }

  componentWillUnmount() {
    const { resetTodoTasks } = this.props
    resetTodoTasks()
  }

  render() {
    const { username, todoTasks } = this.props
    return (
      <WrapperScreen>
        { todoTasks &&
          <TodoList todoTasks={todoTasks} username={username} />
        }
      </WrapperScreen>
    )
  }

}

const mapStateToProps = (state) => ({
  userId: state.authedUser.id,
  username: state.authedUser.name,
  todoTasks: state.tasks.todoTasks
})

const mapDispatchToProps = (dispatch) => ({
  handleGetTodoTasks: (userId) => dispatch(handleGetTodoTasks(userId)),
  resetTodoTasks: () => dispatch(resetTodoTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoScreen)
