import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { handleGetCourses, setSelectedCourse } from '../../actions/courses'
import CoursesList from '../../components/CoursesList'

const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: white;
  height: 100%;
`

class HomeScreen extends Component {

  static navigationOptions = () => ({
    title: 'Cursos'
  })

  componentWillMount() {
    const { getCoursesInfo, userId } = this.props
    getCoursesInfo(userId)
  }

  shouldComponentUpdate(nextProps) {
    const { selectedCourse, navigation} = nextProps
    if (selectedCourse !== null) {
      navigation.navigate('Sprints')
      return false
    }
    return true
  }

  render() {
    const { infoUserCourses, setSelectedCourse } = this.props
    return (
      <WrapperScreen showsVerticalScrollIndicator={false}>
        { infoUserCourses &&
          <CoursesList
            infoUserCourses={infoUserCourses}
            setSelectedCourse={setSelectedCourse}
          />
        }
      </WrapperScreen>
    )
  }
}

const mapStateToProps = (state) => ({
  infoUserCourses: state.courses.infoUserCourses,
  userId: state.authedUser.id,
  selectedCourse: state.courses.selectedCourse
})

const mapDispatchToProps = (dispatch) => ({
  getCoursesInfo: (id) => dispatch(handleGetCourses(id)),
  setSelectedCourse: (selectedCourse) => dispatch(setSelectedCourse(selectedCourse))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
