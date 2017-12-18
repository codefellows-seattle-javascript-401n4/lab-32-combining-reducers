import React from 'react';

import Header from './header.js';
import CatNav from './categories/cat-nav.js';
import CatForm from './categories/cat-form.js';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
       <Header />
       <CatNav />
       <CatForm />
      </div>
    )
  }
}

export default App;
