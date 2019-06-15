import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import Home from '../Home/Home'
import Feelings from '../Feelings/Feelings'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        
        {/* ROUTES TO COMPONENTS/PAGES */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/feelings" component={Feelings}></Route>
        <Route path="/understanding" component={Understanding}></Route>
        <Route path="/support" component={Support}></Route>
        <Route path="/comments" exact component={Comments}></Route>
        <Route path="/review" exact component={Review}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
