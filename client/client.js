import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './js/redux/reducers';
import { fetchUser } from './js/redux/actions';
import App from './js/App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchUser());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementsByTagName('main')[0]
);
