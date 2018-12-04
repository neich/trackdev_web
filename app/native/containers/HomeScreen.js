import React from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import styled from 'styled-components/native'

import { handleLogoutAction } from '../../actions/authedUser'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  submitLogout() {
    this.props.dispatch(handleLogoutAction())
  }

  render() {
    return (
      <WrapperScreen>
        <ScrollViewContainer>
          <Container>

            <TextHeader>
              Això hauria de ser la pàgina després del LogIn
            </TextHeader>

            <HighlightContainer>
              <HighlightText>Aqui dins es podria posar qualsevol cosa</HighlightText>
            </HighlightContainer>

            <TextHeader>
              Per exemple, un menú on anar ràpidament a projectes actius o llocs d'interès.
            </TextHeader>
          </Container>

          <WrapperTouchable>
            <TouchableElement onPress={() => console.log('Hello World!')} >
              <TextLink>Al fer click fa console.log</TextLink>
            </TouchableElement>
          </WrapperTouchable>

          <WrapperTouchable>
            <TouchableElement onPress={() => this.submitLogout()} >
              <TextLink>Logout</TextLink>
            </TouchableElement>
          </WrapperTouchable>
        </ScrollViewContainer>

        <AbsoluteView>
          <AbsoluteText>Això es la barra del Navigator</AbsoluteText>

          <HighlightContainer>
            <HighlightText>Aquí s'haurien de triar menús importants</HighlightText>
          </HighlightContainer>
        </AbsoluteView>
      </WrapperScreen>
    );
  }

}

function mapStateProps ({ authedUser }) {
  let username;
  authedUser ? username =  authedUser.name : null;
  return {
      notLogged: authedUser === null,
      username: username
  }
}


export default connect(mapStateProps)(HomeScreen)

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding-top: 50;
`

const AbsoluteView = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  elevation: 20;
  align-items: center;
  background-color: #fbfbfb;
  padding-top: 20;
  padding-bottom: 20;
`

const HighlightContainer = styled.View`
  background-color: rgba(0,0,0,0.05);
  border-radius: 3;
  padding-horizontal: 4;
  margin-vertical: 8;
`

const AbsoluteText = styled.Text`
  font-size: 17;
  color: rgba(96,100,109, 1);
  text-align: center;
`

const HighlightText = styled.Text`
  background-color: rgba(0,0,0,0.05);
  border-radius: 3;
  padding-horizontal: 4;
`

const Container = styled.View`
  align-items: center;
  margin-horizontal: 50;
`

const WrapperTouchable = styled.View`
  background-color: papayawhip;
  margin-top: 16;
  align-items: center;
`

const TextHeader = styled.Text`
  font-size: 17;
  color: rgba(96,100,109, 1);
  line-height: 24;
  text-align: center;
`

const TextLink = styled.Text`
  font-size: 14;
  color: #2e78b7;
`

const WrapperScreen = styled.View`
  flex: 1;
  background-color: white;
`

const TouchableElement = styled.TouchableOpacity`
  padding-vertical: 16;
`
