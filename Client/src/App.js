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
      displayWelcomePage: true,
      displayPlayerDetail: false,
      playerNumberToBeDisplayed: null,
      players: [],
      teams: [],
      player: null,
      auctionScore: 0,
      selectTeam: false,
      playerTeam: ""
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
  StartAuction = () => {
    this.setState({displayWelcomePage: false})
  }
  OpenRulePage = () => {
    this.setState({displayWelcomePage: true})
  }
  handleNextPlayerFormSubmit = (event) => {
    event.preventDefault();
    let player = this.state.players.find((player) => player.Number === this.state.playerNumberToBeDisplayed)
    this.setState({
      displayPlayerDetail: true,
      player: player
    })
  }
  handleNextPlayerFormChange = (event) => {
    this.setState({playerNumberToBeDisplayed: parseInt(event.target.value)});
  }
  auctionIncrement = (amt) => {
    let IncreasedPoints = this.state.auctionScore + amt;
    this.setState({
      auctionScore: IncreasedPoints
    })
  }
  auctionDecrement = (amt) => { 
    let decreasedPoints = this.state.auctionScore - amt;
    this.setState({
      auctionScore: decreasedPoints
    })
  }
  auctionReset = () => {
    this.setState({
      auctionScore: 0
    })
  }
  modalOpen = ()=>{
    this.setState({
      selectTeam: true
    })
  }
  modalClose = () => {
    this.setState({
      selectTeam: false
    })
  }
  handleTeamSelect = event => {
    this.setState({ playerTeam : event.target.value });
  };
  backToForm = () => {
    this.setState({
      displayWelcomePage: false,
      displayPlayerDetail: false,
      playerNumberToBeDisplayed: null,
      player: null,
      auctionScore: 0,
      selectTeam: false,
      playerTeam: "",
    })
  }
  handleSold = (player, team ,price) => {
      axios.put(`http://localhost:5000/api/teams/${team}`, {price, playerNo: player.Number})
      .then(res => {
        console.log(res);
        return axios.put(`http://localhost:5000/api/players/${player._id}/${team}`, {price});
      })
      .then(res => {
        console.log(res);
        return axios.get("http://localhost:5000/api/players");
      })
      .then(res => {
        this.setState({players: res.data})
        return axios.get("http://localhost:5000/api/teams");
      })
      .then(res => {
        this.setState({
          teams: res.data,
          displayWelcomePage: false,
          displayPlayerDetail: false,
          playerNumberToBeDisplayed: null,
          player: null,
          auctionScore: 0,
          selectTeam: false,
          playerTeam: "",
        })
      })
      .catch(err => console.log(err))     
  }
  render() {
    return (
      <div className="App">
        <div className = "child">
        <Paper><PlayerDashboard 
        players={this.state.players} 
        teams={this.state.teams}
        player={this.state.player}
        playerTeam = {this.state.playerTeam}
        auctionScore = {this.state.auctionScore}
        selectTeam = {this.state.selectTeam}
        auctionIncrement = {this.auctionIncrement}
        auctionDecrement = {() => this.auctionDecrement(100)}
        modalOpen = {this.modalOpen}
        modalClose= {this.modalClose}
        displayWelcomePage = {this.state.displayWelcomePage}
        displayPlayerDetail = {this.state.displayPlayerDetail}
        playerNumberToBeDisplayed = {this.state.playerNumberToBeDisplayed}
        StartAuction = {this.StartAuction}
        handleTeamSelect = {this.handleTeamSelect}
        handleSold = {this.handleSold}
        OpenRulePage = {this.OpenRulePage}
        handleNextPlayerFormChange = {this.handleNextPlayerFormChange}
        handleNextPlayerFormSubmit = {this.handleNextPlayerFormSubmit}
        backToForm = {this.backToForm}
        /></Paper>
          
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
