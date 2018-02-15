import {createStore} from 'redux';

import reducer from '../component/reducer';

export default () => createStore(reducer);