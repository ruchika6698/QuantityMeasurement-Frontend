import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./CSS/table.css";
import "./CSS/Measurement.css";
import { History} from './Components/history'
import { MeasurementApp} from './Components/measurement'
import './App.css';

class App extends Component {
  render() {
    return (
    
    <div>
      <Router>
    
      <Route path="/" component={MeasurementApp} />
      <Route path="/quantitymeasurement/history" component={History} />
       
      </Router>
      </div>
    );
  }
}

export default App;
