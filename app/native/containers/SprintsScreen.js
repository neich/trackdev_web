import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { handleGetSprints, resetSprints, setSelectedStory, setGroupUsers } from '../../actions/sprints'
import { resetSelectedCourse } from '../../actions/courses'

import SprintsList from '../../components/SprintsList'
import FloatingButton from '../../components/FloatingButton'

const Wrapper = styled.View`
  position: relative;
  flex: 1;
`

const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: white;
  height: 100%;
`

class SprintsScreen extends Component {
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
    const { getSprintsInfo, userId, selectedCourse } = this.props
    getSprintsInfo(userId, selectedCourse.idCurs)
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.updateTitleBar) {
      this.props.navigation.setParams({ topTitle: nextProps.selectedCourse.acronym })
      this.updateTitleBar = false
    }
  }

  shouldComponentUpdate(nextProps) {
    const { selectedStory, pressGroupUsers, navigation} = nextProps
    if (pressGroupUsers) {
      navigation.navigate('GroupUsers')
      return false
    }
    if (selectedStory !== null) {
      navigation.navigate('Tasks')
      return false
    }
    return true
  }
  
  componentWillUnmount() {
    const { resetUserSprints, resetSelectedCourse } = this.props
    resetUserSprints()
    resetSelectedCourse()
  }

  render() {
    const { sprints, setSelectedStory, setGroupUsers } = this.props
    return (
      <Wrapper>
        <WrapperScreen showsVerticalScrollIndicator={false} >
          { sprints &&
            <SprintsList
              sprintsFuturs={sprints.sprintsFuturs}
              sprintsPassats={sprints.sprintsPassats}
              sprintActiu={sprints.sprintActiu}
              historiesBacklog={sprints.historiesBacklog}
              setSelectedStory={setSelectedStory}
            />
          }
        </WrapperScreen>
        <FloatingButton
          content={'G'}
          handleOnPress={setGroupUsers}
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedCourse: state.courses.selectedCourse,
  userId: state.authedUser.id,
  sprints: state.sprints.infoUserSprints,
  selectedStory: state.sprints.selectedStory,
  pressGroupUsers: state.sprints.pressGroupUsers
})

const mapDispatchToProps = (dispatch) => ({
  getSprintsInfo: (userId, courseId) => dispatch(handleGetSprints(userId, courseId)),
  resetUserSprints: () => dispatch(resetSprints()),
  resetSelectedCourse: () => dispatch(resetSelectedCourse()),
  setSelectedStory: (selectedStory) => dispatch(setSelectedStory(selectedStory)),
  setGroupUsers: () => dispatch(setGroupUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintsScreen)
