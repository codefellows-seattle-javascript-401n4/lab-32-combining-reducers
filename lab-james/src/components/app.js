import React from 'react';

import Header from './header.js';
import CatNav from './cat-nav.js';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
       <Header />
       <CatNav />
      </div>
    )
  }
}

export default App;
