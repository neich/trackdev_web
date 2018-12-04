import React, { Component } from 'react'

import { Provider } from 'react-redux'
import AppNavigator from '../navigation/AppNavigator'
import configureStore from '../../store/configureStore.native'

const store = configureStore()

//evita warnings que es solucionen a la versió 0.57 de react-native
console.ignoredYellowBox = ['Warning:']

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}
