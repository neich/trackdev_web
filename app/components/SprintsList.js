import React, { Component, Fragment } from 'react'
import styled from 'styled-components/native'
import styles from '../utils/styles'

import Card from './Card'

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${styles.colors.title};

  margin-bottom: 8px;
`

const WrapperHistories = styled.View`
  background-color: ${styles.colors.primary};

  padding: 0px 24px;
  width: 100%;
`

const ButtonHistoria = styled.TouchableOpacity`
  position: relative;

  border-radius: 8;
  border-width: 2;
  border-color: ${styles.colors.secondary};

  margin: 8px 0px;

  overflow: hidden;

  elevation: 2;
`

const Historia = styled.Text`
  font-size: 14px;
  background-color: ${styles.colors.secondary};
  color: ${styles.colors.primary};

  padding: 8px 52px 8px 8px;
`

const StoryPointsContent = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;

  background-color: ${styles.colors.primary};

  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const StoryPoints = styled.Text`
  position: relative;

  font-size: 14px;
  color: ${styles.colors.secondary};

  padding: 8px;
`

class SprintsList extends Component {
  constructor(props) {
    super(props)
  }

  renderHistories(infoHistories) {
    const { setSelectedStory } = this.props
    const histories = []
    for (let i=0; i<infoHistories.length; i++) {
      histories.push(
        <ButtonHistoria key={i} onPress={() => setSelectedStory(infoHistories[i])}>
          <Historia>{infoHistories[i].nomHistoria}</Historia>
          <StoryPointsContent>
            <StoryPoints>
            {
              infoHistories[i].puntsHistoria <= 9 ?
              '   '.concat(infoHistories[i].puntsHistoria.toString().concat(' SP')) :
              infoHistories[i].puntsHistoria.toString().concat(' SP')
            }
            </StoryPoints>
          </StoryPointsContent>
        </ButtonHistoria>
      )
    }
    return histories
  }

  renderSprints(sprints) {
    const sprintCards = []
    for (let i=0; i<sprints.length; i++) {
      sprintCards.push(
        <Card key={i}
          title={'Històries: '}
          topRightText={sprints[i].dataIniciSprint && `${sprints[i].dataIniciSprint} - ${sprints[i].dataFiSprint}`}
        >
          <WrapperHistories>
            {this.renderHistories(sprints[i].infoHistories)}
          </WrapperHistories>
        </Card>
      )
    }
    return sprintCards
  }

  render() {
    const { sprintsFuturs, sprintActiu, historiesBacklog, sprintsPassats } = this.props
    return (
      <Fragment>
        { sprintActiu &&
          <Fragment>
            <TitlePage>Sprint actiu:</TitlePage>
            {this.renderSprints([sprintActiu])}
          </Fragment>
        }
        { historiesBacklog &&
          <Fragment>
            <TitlePage>Backlog:</TitlePage>
            {this.renderSprints([historiesBacklog])}
          </Fragment>
        }
        {sprintsFuturs.length > 0 && <TitlePage>Sprints futurs:</TitlePage>}
        {this.renderSprints(sprintsFuturs)}
        {sprintsPassats.length > 0 && <TitlePage>Sprints passats:</TitlePage>}
        {this.renderSprints(sprintsPassats)}
      </Fragment>
    )
  }
}

export default SprintsList
