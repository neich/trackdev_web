import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import CourseCard from './CourseCard'

const Space = styled.View`
  height: 16px;
`

class CoursesList extends PureComponent {

  renderCourses () {
    const { infoUserCourses, setSelectedCourse } = this.props
    const courses = []
    for (let i=0; i<infoUserCourses.length; i++) {
      courses.push(
      <Fragment key={i}>
        <CourseCard
          title={infoUserCourses[i].nomAssig}
          professors={infoUserCourses[i].professorsCurs}
          credits={infoUserCourses[i].creditsAssig}
          dataInici={infoUserCourses[i].dataIniciCurs}
          dataFi={infoUserCourses[i].dataFiCurs}
          onPress={() => setSelectedCourse(infoUserCourses[i])}
        />
        <Space />
      </Fragment>
      )
    }
    return courses
  }

  render() {
    return (
      <Fragment>
        {this.renderCourses()}
      </Fragment>
    )
  }
}

export default CoursesList
