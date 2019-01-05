import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogoutAction, handleGetCourses } from '../../actions/authedUser'
import styled from 'styled-components/native'
import styles from '../../utils/styles'

import ProfilePage from '../../components/ProfilePage'
import Button from '../../components/Button'

const Wrapper = styled.View`
  flex: 1;
`
const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: ${styles.colors.secondary};
  height: 100%;
`

const LogoutContent = styled.View`
  background-color: ${styles.colors.secondary};

  border-top-width: 0.4;
  border-color: lightgray;

  padding: 8px 16px;

  elevation: 32;
`

class ProfileScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = () => ({
    title: 'Perfil'
  })

  componentWillMount() {
    const { handleGetCourses, userId } = this.props
    handleGetCourses(userId)
  }

  shouldComponentUpdate(nextProps) {
    const { navigation, userId, coursesInfo } = nextProps
    if (!userId) {
      navigation.navigate('Login')
    }
    if (coursesInfo !== null) {
      return true
    }
    return false
  }

  render() {
    const { logoutAction, username, userEmail, coursesInfo } = this.props
    return (
      <Wrapper>
        <WrapperScreen>
          { coursesInfo &&
            <ProfilePage
              username={username}
              userEmail={userEmail}
              coursesList={coursesInfo}
            />
          }
        </WrapperScreen>
        <LogoutContent>
          <Button
            onPress={() => logoutAction()}
            text={'LOG OUT'}
            danger
          />
        </LogoutContent>
      </Wrapper>
    )
  }

}

const mapStateToProps = (state) => ({
  userId: state.authedUser.id,
  username: state.authedUser.name,
  userEmail: state.authedUser.email,
  coursesInfo: state.authedUser.coursesInfo
})

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => dispatch(handleLogoutAction()),
  handleGetCourses: (userId) => dispatch(handleGetCourses(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
