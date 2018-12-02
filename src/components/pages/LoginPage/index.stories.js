import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoginPage } from 'components';

//ref: https://medium.com/ingenious/storybook-meets-redux-6ab09a5be346
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
const store = createStore(combineReducers({LoginPage:{}}))

storiesOf('LoginPage', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('default', () => (<LoginPage/>) );