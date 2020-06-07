import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import "./CSS/table.css";
import { History} from './Components/history'
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Router>
      
      <Route path="/quantitymeasurement/history" component={History} />
       
      </Router>
      </div>
    );
  }
}

export default App;
