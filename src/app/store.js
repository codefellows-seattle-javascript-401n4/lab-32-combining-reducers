import {createStore} from 'redux';

import reducer from '../components/combine-reducers';

export default () => createStore(reducer);
