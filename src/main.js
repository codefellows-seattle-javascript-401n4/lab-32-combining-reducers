import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import catergoryReducer from './reducer/categories';

let store = createStore(catergoryReducer);

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
container);

