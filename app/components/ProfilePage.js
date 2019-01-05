import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'

import UserCard from './UserCard'
import Card from './Card'

const StyledText = styled.Text`
  font-size: 14px;
  color: ${styles.colors.secondary};

  padding: 8px 16px 0px 24px;
`

class ProfilePage extends PureComponent{
  constructor(props) {
    super(props)
  }

  renderCoursesInfo() {
    const { coursesList } = this.props
    const courses = []
    for (let i=0; i<coursesList.length; i++) {
      courses.push(
        <Card
          key={i}
          title={coursesList[i].acronym + '        ' + coursesList[i].dataInici.substr(-7) + '  -  ' + coursesList[i].dataFi.substr(-7)}
        >
          <StyledText>{'Percentatge aportat: ' + coursesList[i].percentatgeAportat * 100 + '%'}</StyledText>
          <StyledText>{'Nota final: ' + coursesList[i].nota}</StyledText>
        </Card>
      )
    }
    return courses
  }

  render() {
    const { username, userEmail } = this.props
    return (
      <Fragment>
        <UserCard
          name={username}
          email={userEmail}
        />
        {this.renderCoursesInfo()}
      </Fragment>
    )
  }

}

export default ProfilePage
