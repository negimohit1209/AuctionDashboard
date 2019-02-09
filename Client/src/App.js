import React, { Component } from 'react';
import PlayerDashboard from './containers/PlayerDashboard/PlayerDashboard';
import TeamDashboard from './containers/TeamDashboard/TeamDashboard';
import './App.css';
import Paper from './components/Paper/Paper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "child">
        <Paper><PlayerDashboard/></Paper>
          
        </div>
        <div className = "child">
        <Paper>
          <TeamDashboard />
        </Paper>
         
        </div>
      </div>
    );
  }
}

export default App;
