import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/nav-bar';
import Home from '../components/home';
import Categories from '../containers/categories';
import '../styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Navbar />

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Categories} />
        </main>

        <Footer>
          <p>&copy;2017</p>
        </Footer>

      </div>
    );
  }
}

export default App;
