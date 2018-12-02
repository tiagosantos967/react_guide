import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoginBox } from 'components';

//ref: https://medium.com/ingenious/storybook-meets-redux-6ab09a5be346
import rootReducer from './reducer'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
const store = createStore(combineReducers({EditClient:rootReducer}))

storiesOf('LoginBox', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('default', () => (<LoginBox/>) )
.add('error', () => (<LoginBox error/>) );