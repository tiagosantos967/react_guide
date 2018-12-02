import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configure-store';

import { LoginPage } from 'components';

const store = configureStore()

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
