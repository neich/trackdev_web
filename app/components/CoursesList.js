import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import Button from './Button'
import styles from '../utils/styles'

const Space = styled.View`
  height: 16px;
`

const ButtonText = styled.Text`
  text-align: center;

  font-size: 18px;
  font-weight: 500;
  color: ${styles.colors.secondary};

  padding: 56px 8px;
`

class CoursesList extends PureComponent {

  renderCourses () {
    const { infoUserCourses, setSelectedCourse } = this.props
    const courses = []
    for (let i=0; i<infoUserCourses.length; i++) {
      courses.push(
      <Fragment key={i}>
        <Button
          bottomLeftText={infoUserCourses[i].professorsCurs.join('\n')}
          bottomRightText={`${infoUserCourses[i].creditsAssig} ETCS`}
          topRightText={`${infoUserCourses[i].dataIniciCurs} - ${infoUserCourses[i].dataFiCurs}`}
          onPress={() => setSelectedCourse(infoUserCourses[i])}
        >
          <ButtonText>
            {infoUserCourses[i].nomAssig}
          </ButtonText>
        </Button>
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
