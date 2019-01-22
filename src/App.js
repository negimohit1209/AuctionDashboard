import React, { Component } from 'react';
import PlayerDashboard from './containers/PlayerDashboard/PlayerDashboard';
import TeamDashboard from './containers/TeamDashboard/TeamDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "child">
          <PlayerDashboard/>
        </div>
        <div className = "child">
          <TeamDashboard />
        </div>
      </div>
    );
  }
}

export default App;
