import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { LoginPage } from 'components';

import configureStore from './configure/store';
import api from './services/api'

const store = configureStore({}, {api})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginPage/>
      </Provider>
    );
  }
}

export default App;
