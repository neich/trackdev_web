import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { handleGetSprints, resetSprints } from '../../actions/sprints'
import { resetSelectedCourse } from '../../actions/courses'

const WrapperScreen = styled.ScrollView`
  padding: 16px;
  background-color: white;
  height: 100%;
`

class SprintsScreen extends Component {
  constructor(props) {
    super(props)

    this.updateTitleBar = true
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('topTitle', ''),
    }
  }

  componentWillMount() {
    const { getSprintsInfo, userId, selectedCourse } = this.props
    getSprintsInfo(userId, selectedCourse.idCurs)
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.updateTitleBar) {
      this.props.navigation.setParams({ topTitle: nextProps.selectedCourse.nomAssig })
      this.updateTitleBar = false
    }
  }
  
  componentWillUnmount() {
    const { resetUserSprints, resetSelectedCourse } = this.props
    resetUserSprints()
    resetSelectedCourse()
  }

  renderHistories(infoHistories) {
    const histories = []
    for (let i=0; i<infoHistories.length; i++) {
      histories.push(
        <ButtonHistoria key={i}>
          <Historia>{infoHistories[i].nomHistoria}</Historia>
          <StoryPointsContent>
            <StoryPoints>{infoHistories[i].puntsHistoria} SP</StoryPoints>
          </StoryPointsContent>
        </ButtonHistoria>
      )
    }
    return histories
  }

  renderSprints() {
    const { sprints } = this.props
    const sprintCards = []
    for (let i=0; i<sprints.length; i++) {
      sprintCards.push(
        <WrapperCard key={i}>
          <Title>Històries: </Title>
          <WrapperHistories>
            {this.renderHistories(sprints[i].infoHistories)}
          </WrapperHistories>
          <Data>{sprints[i].dataIniciSprint} - {sprints[i].dataFiSprint}</Data>
        </WrapperCard>
      )
    }
    return sprintCards
  }

  render() {
    const { sprints } = this.props
    return (
      <WrapperScreen showsVerticalScrollIndicator={false} >
        <TitlePage>Sprints:</TitlePage>
        { sprints &&
          this.renderSprints()
        }
      </WrapperScreen>
    )
  }
}

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: black;

  margin-bottom: 8px;
`

const WrapperCard = styled.View`
  position: relative;

  background-color: orange;
  border-width: 1.5;
  border-color: white;
  border-radius: 8;

  overflow: hidden;

  margin-bottom: 16px;

  elevation: 0;
`

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: white;

  padding: 24px 16px 8px 16px;
`

const Data = styled.Text`
  position: absolute;
  color: white;

  padding: 8px;

  top: 0;
  right: 0;
`

const WrapperHistories = styled.View`
  background-color: orange;

  padding: 8px 32px;
  width: 100%;
`

const ButtonHistoria = styled.TouchableOpacity`
  position: relative;

  border-radius: 8;
  border-width: 2;
  border-color: white;

  margin-bottom: 16px;

  overflow: hidden;

  elevation: 2;
`

const Historia = styled.Text`
  font-size: 14px;
  background-color: orange;
  color: white;

  border-radius: 8;

  padding: 8px 52px 8px 8px;
`

const StoryPointsContent = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;

  background-color: white;

  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const StoryPoints = styled.Text`
  position: relative;

  font-size: 14px;
  color: orange;

  padding: 8px;
`





const mapStateToProps = (state) => ({
  selectedCourse: state.courses.selectedCourse,
  userId: state.authedUser.id,
  sprints: state.sprints.infoUserSprints
})

const mapDispatchToProps = (dispatch) => ({
  getSprintsInfo: (userId, courseId) => dispatch(handleGetSprints(userId, courseId)),
  resetUserSprints: () => dispatch(resetSprints()),
  resetSelectedCourse: () => dispatch(resetSelectedCourse())
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintsScreen)
