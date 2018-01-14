'use strict';

import {createStore} from 'redux';
import reducer from '../src/reducer/appReducer.js';

export default () => createStore(reducer);
