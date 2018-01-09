import React from 'react';
import {Route} from 'react-router-dom';

import Categories from './categories/category-container';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <main>
          <Route exact path='/' component={Categories} />
        </main>

      </div>
    )
  }
}

export default App;
