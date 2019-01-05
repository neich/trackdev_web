import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'

import UserCard from './UserCard'

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${styles.colors.title};

  margin-bottom: 8px;
`

class GroupUsersList extends PureComponent {

  renderUsers () {
    const { groupUsers } = this.props
    const usersInfo = []
    for (let i=0; i<groupUsers.length; i++) {
      usersInfo.push(
        <UserCard
          key={i}
          name={groupUsers[i].nom}
          email={groupUsers[i].email}
          ratio={groupUsers[i].percentatgeAportat}
        />
      )
    }
    return usersInfo
  }

  render() {
    return (
      <Fragment>
        <TitlePage>Participants del grup:</TitlePage>
        {this.renderUsers()}
      </Fragment>
    )
  }
}


export default GroupUsersList
