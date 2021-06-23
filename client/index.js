import React from 'react';
// lets all nested components reach in to provider and grab data
import { Provider } from 'react-redux';
// needed to render react to DOM
import { render } from 'react-dom';
// a middleware that lets us not return actions
import ReduxThunk from 'redux-thunk';
// necessary for redux functionality
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
