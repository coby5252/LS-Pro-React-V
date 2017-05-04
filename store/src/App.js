import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Items from './items';
import ItemDetail from './itemdetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Items} />
          <Route path="/items/:itemId" component={ItemDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
