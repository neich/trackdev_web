import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import styles from '../../utils/styles'
import { handleGetTodoTasks } from '../../actions/tasks'

const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: ${styles.colors.secondary};
  height: 100%;
`

const TestText = styled.Text`

`

class ToDoScreen extends Component {

  componentWillMount() {
    const { handleGetTodoTasks, userId } = this.props
    handleGetTodoTasks(userId)
  }

  componentWillUnmount() {
    console.log('cal esborrar les dades carregades del servidor i també a profile screen i courses screen!!!')
  }

  render() {
    return (
      <WrapperScreen>
        <TestText>HOLAAAA</TestText>
      </WrapperScreen>
    )
  }

}

const mapStateToProps = (state) => ({
  userId: state.authedUser.id
})

const mapDispatchToProps = (dispatch) => ({
  handleGetTodoTasks: (userId) => dispatch(handleGetTodoTasks(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoScreen)
