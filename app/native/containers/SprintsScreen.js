import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { handleGetSprints, resetSprints } from '../../actions/sprints'
import { resetSelectedCourse } from '../../actions/courses'

import SprintsList from '../../components/SprintsList'

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
      this.props.navigation.setParams({ topTitle: nextProps.selectedCourse.nomAssig })
      this.updateTitleBar = false
    }
  }
  
  componentWillUnmount() {
    const { resetUserSprints, resetSelectedCourse } = this.props
    resetUserSprints()
    resetSelectedCourse()
  }

  render() {
    const { sprints } = this.props
    return (
      <WrapperScreen showsVerticalScrollIndicator={false} >
        { sprints &&
          <SprintsList sprints={sprints}/>
        }
      </WrapperScreen>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedCourse: state.courses.selectedCourse,
  userId: state.authedUser.id,
  sprints: state.sprints.infoUserSprints
})

const mapDispatchToProps = (dispatch) => ({
  getSprintsInfo: (userId, courseId) => dispatch(handleGetSprints(userId, courseId)),
  resetUserSprints: () => dispatch(resetSprints()),
  resetSelectedCourse: () => dispatch(resetSelectedCourse())
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintsScreen)
