import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./CSS/table.css";
import { History} from './Components/history'
import { TopBar} from './Components/topBar'
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Router>
      <Route exact path="/" component={TopBar} />
      <Route  path="/quantitymeasurement/history" component={History} />
       
      </Router>
      </div>
    );
  }
}

export default App;
