import React, { Component } from 'react';
import RootApp from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../reducers'
import middleware from '../..//middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  middleware
))

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <RootApp/>
        </Provider>
        );
  }
}