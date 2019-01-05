import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import styles from '../../utils/styles'

const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: ${styles.colors.secondary};
  height: 100%;
`

const TestText = styled.Text`

`

class ToDoScreen extends Component {

  render() {
    return (
      <WrapperScreen>
        <TestText>HOLAAAA</TestText>
      </WrapperScreen>
    )
  }

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoScreen)
