import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import createStore from './app/store.js';

import CategoryContainer from './components/category-container.js';

const store = createStore();

class Main extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    store.subscribe( () => console.log('__STORE__', store.getState()));
  }

  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <CategoryContainer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));
