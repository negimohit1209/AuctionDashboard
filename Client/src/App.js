import React, { Component } from 'react';
import PlayerDashboard from './containers/PlayerDashboard/PlayerDashboard';
import TeamDashboard from './containers/TeamDashboard/TeamDashboard';
import './App.css';
import Paper from './components/Paper/Paper';
import axios from 'axios'
// import { Provider } from 'react-redux';
// import store from './Playground/store';
// import Playground from './Playground/component/playground';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      teams: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players').then(res => {this.setState({
      players: res.data
    })
  console.log(this.state.players)
  })
  .then(() => {
    axios.get('http://localhost:5000/api/teams').then(res => {this.setState({
      teams: res.data
    })
    console.log(this.state.teams)
    })
  })
  }
  
  render() {
    return (
      <div className="App">
        <div className = "child">
        <Paper><PlayerDashboard players={this.state.players} teams={this.state.teams}/></Paper>
          
        </div>
        <div className = "child">
        <Paper>
          <TeamDashboard teams={this.state.teams} players={this.state.players}/>
        </Paper>
         
        </div>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <Playground/>
//         </div>
//       </Provider>
      
//     );
//   }
// }

export default App;
