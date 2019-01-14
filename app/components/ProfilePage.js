import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'
import { Icon } from 'react-native-elements'

import UserCard from './UserCard'
import Card from './Card'

const StyledText = styled.Text`
  font-size: 14px;
  color: ${styles.colors.secondary};

  margin-left: 4px;
`

const WrapperText = styled.View`
  margin-top: 8px;
  margin-left: 16px;
  flex-direction: row;
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
          <WrapperText>
            <Icon name='work' size={20} color={styles.colors.secondary} />
            <StyledText>{'Aportació: ' + coursesList[i].percentatgeAportat * 100 + '%'}</StyledText>
          </WrapperText>
          <WrapperText>
            <Icon name='group-work' size={20} color={styles.colors.secondary} />
            <StyledText>{'Nota de grup: ' + coursesList[i].nota}</StyledText>
          </WrapperText>
          <WrapperText>
            <Icon name='fingerprint' size={20} color={styles.colors.secondary} />
            <StyledText>{'Nota individual: ' + coursesList[i].nota}</StyledText>
          </WrapperText>
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
