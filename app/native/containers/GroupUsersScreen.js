import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { disableGroupUsers } from '../../actions/sprints'
import { handleGetGroupUsers, resetGroupUsers } from '../../actions/groupUsers'

import GroupUsersList from '../../components/GroupUsersList'

const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: white;
  height: 100%;
`

class GroupUsersScreen extends Component {
  constructor(props) {
    super(props)

  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Grup',
    }
  }

  componentWillMount() {
    const { getGroupUsers, grupId } = this.props
    getGroupUsers(grupId)
  }

  componentWillUnmount() {
    const { resetGroupUsers, disableGroupUsers } = this.props
    disableGroupUsers()
    resetGroupUsers()
  }

  render() {
    const { groupUsers } = this.props
    return (
      <WrapperScreen showsVerticalScrollIndicator={false} >
        { groupUsers &&
          <GroupUsersList groupUsers={groupUsers} />
        }
      </WrapperScreen>
    )
  }
}

const mapStateToProps = (state) => ({
  grupId: state.sprints.infoUserSprints.grupId,
  groupUsers: state.groupUsers
})

const mapDispatchToProps = (dispatch) => ({
  disableGroupUsers: () => dispatch(disableGroupUsers()),
  getGroupUsers: (groupId) => dispatch(handleGetGroupUsers(groupId)),
  resetGroupUsers: () => dispatch(resetGroupUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupUsersScreen)
