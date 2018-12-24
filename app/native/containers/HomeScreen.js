import React, { Fragment } from 'react'
import { Button, View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { handleGetCourses } from '../../actions/courses'
import CourseCard from '../../components/CourseCard'

const WrapperScreen = styled.View`
  padding: 16px;
  background-color: #f4f2ef;
  height: 100%;
`

const Space = styled.View`
  height: 16px;
`

class HomeScreen extends React.Component {

  componentWillMount() {
    const { getCoursesInfo, userId } = this.props
    console.log(userId)
    getCoursesInfo(userId)
  }

  renderCourses () {
    const { infoUserCourses } = this.props
    const courses = []
    for (let i=0; i<infoUserCourses.length; i++) {
      courses.push(
        <Fragment>
          <CourseCard
            title={infoUserCourses[i].nomAssig}
            professors={infoUserCourses[i].professorsCurs}
            credits={infoUserCourses[i].creditsAssig}
            dataInici={infoUserCourses[i].dataIniciCurs}
            dataFi={infoUserCourses[i].dataFiCurs}
          />
          <Space />
        </Fragment>
      )
    }
    return courses
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} >
        <WrapperScreen>
          { this.props.infoUserCourses &&
            <View>
              {this.renderCourses()}
            </View>
          }
        </WrapperScreen>
      </ScrollView>
      
    )
  }

}

const mapStateToProps = (state) => ({
  infoUserCourses: state.courses.infoUserCourses,
  userId: state.authedUser.id
})

const mapDispatchToProps = (dispatch) => ({
  getCoursesInfo: (id) => dispatch(handleGetCourses(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
