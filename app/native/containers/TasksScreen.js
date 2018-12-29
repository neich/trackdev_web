import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { resetSelectedStory } from '../../actions/sprints'
import { handleGetTasks, resetTasks } from '../../actions/tasks'

import TaskList from '../../components/TaskList'

const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: white;
  height: 100%;
`

class TasksScreen extends Component {
  constructor(props) {
    super(props)

    this.updateTitleBar = true
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('topTitle', ''),
    }
  }

  componentWillMount() {
    const { getTasks, selectedStory } = this.props
    getTasks(selectedStory.idHistoria)
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.updateTitleBar) {
      this.props.navigation.setParams({ topTitle: nextProps.selectedStory.nomHistoria })
      this.updateTitleBar = false
    }
  }
  
  componentWillUnmount() {
    const { resetSelectedStory, resetTasks } = this.props
    resetSelectedStory()
    resetTasks()
  }

  render() {
    const { infoTasks } = this.props
    return (
      <WrapperScreen showsVerticalScrollIndicator={false} >
        { infoTasks &&
          <TaskList infoTasks={infoTasks} />
        }
      </WrapperScreen>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedStory: state.sprints.selectedStory,
  infoTasks: state.tasks.infoTasks
})

const mapDispatchToProps = (dispatch) => ({
  resetSelectedStory: () => dispatch(resetSelectedStory()),
  getTasks: (storyId) => dispatch(handleGetTasks(storyId)),
  resetTasks: () => dispatch(resetTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksScreen)
