import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogoutAction, handleGetCourses, resetAuthedUserCourses } from '../../actions/authedUser'
import styled from 'styled-components/native'
import styles from '../../utils/styles'

import ProfilePage from '../../components/ProfilePage'
import Button from '../../components/Button'

const Wrapper = styled.View`
  flex: 1;
`
const WrapperScreen = styled.ScrollView.attrs({ showsVerticalScrollIndicator: false })`
  padding: 16px;
  background-color: ${styles.colors.secondary};
  height: 100%;
`

const LogoutContent = styled.View`
  background-color: ${styles.colors.secondary};

  border-top-width: 0.4;
  border-color: ${styles.colors.subtitle};

  padding: 8px 16px;
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

  componentWillUnmount() {
    const { resetAuthedUserCourses } = this.props
    resetAuthedUserCourses()
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
            icon={'exit-to-app'}
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
  handleGetCourses: (userId) => dispatch(handleGetCourses(userId)),
  resetAuthedUserCourses: () => dispatch(resetAuthedUserCourses())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
