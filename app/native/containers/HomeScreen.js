import React from 'react'
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { handleGetCourses } from '../../actions/courses'

const WrapperScreen = styled.View`
  padding: 16px;
`

const Space = styled.View`
  height: 16px;
`

class HomeScreen extends React.Component {

  componentWillMount() {
    const { getCoursesInfo } = this.props
    getCoursesInfo(4)
  }

  render() {
    return (
      <WrapperScreen>
        <Space />
        <Button onPress={() => this.props()} title='CRASH APP (to reload)' />
        <Space />
        {
          this.props.infoUserCourses &&
            <Text>
              {this.props.infoUserCourses[0].nomAssig}
            </Text>
        }
      </WrapperScreen>
    )
  }

}

const mapStateToProps = (state) => ({
  infoUserCourses: state.courses.infoUserCourses
})

const mapDispatchToProps = (dispatch) => ({
  getCoursesInfo: (id) => dispatch(handleGetCourses(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
