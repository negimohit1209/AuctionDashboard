import React, { Component } from 'react';
import PlayerDashboard from './containers/PlayerDashboard/PlayerDashboard';
import TeamDashboard from './containers/TeamDashboard/TeamDashboard';
import './App.css';
import Paper from './components/Paper/Paper';
import axios from 'axios';
import {db} from './firebase/firebase';
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
      playerTeam: "",
      loading: false,
      teamPlayerImages:[]
    }
  }

  async componentDidMount(){
    db.collection('teams').get().then((snapshot) => {
      let docTeams = snapshot.docs.map(doc => ({captainImage: doc.data().captainImage,amount: doc.data().amount, noOfPlayers: doc.data().noOfPlayers, teamName: doc.id}));
      this.setState({
        teams: docTeams
      });
    })
  }
  StartAuction = () => {
    this.setState({displayWelcomePage: false})
  }
  OpenRulePage = () => {
    this.setState({displayWelcomePage: true})
  }
  handleNextPlayerFormSubmit = async (event) => {
    event.preventDefault();
    await db.collection('players').doc(this.state.playerNumberToBeDisplayed.toString()).get().then((doc) => {
      if(doc.exists){
        let player = {...doc.data(), number: doc.id}
        this.setState({
          displayPlayerDetail: true,
          player: player
        })
      }else{
        console.log("No such document!");
      }
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
    if(decreasedPoints >= 0){
      this.setState({
        auctionScore: decreasedPoints
      })
    } 
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
  handleSold = async (player, teamName ,price) => {
    this.setState({
      loading: true
    })
    let team;
    await db.collection('teams').doc(teamName).get().then((doc) => {
      team = {
        ...doc.data(),
        teamName: doc.id,
      }
    });
      if(team.amount > price){
        let batch = db.batch();
        var teamRef = db.collection("teams").doc(team.teamName);
        batch.update(teamRef, {amount: team.amount - price, noOfPlayers: team.noOfPlayers + 1});
        var teamPlayerRef = db.collection('teams').doc(team.teamName).collection('players').doc(player.number);
        batch.set(teamPlayerRef, {amount: price, photo: player.photo, name: player.name, whatsAppNumber: player.whatsAppNumber, hostel: player.hostel, position: player.position});
        var playerRef = db.collection('players').doc(player.number);
        batch.update(playerRef, {teamName: team.teamName, amount: price, });
        batch.commit().then(() => {
          db.collection('teams').get().then((snapshot) => {
            let docTeams = snapshot.docs.map(doc => ({captainImage: doc.data().captainImage,amount: doc.data().amount, noOfPlayers: doc.data().noOfPlayers, teamName: doc.id}));
            this.setState({
              teams: docTeams,
              displayWelcomePage: false,
            displayPlayerDetail: false,
            playerNumberToBeDisplayed: null,
            player: null,
            auctionScore: 0,
            selectTeam: false,
            playerTeam: "",
            loading: false
            });
          });
        }).catch((err) => {
          this.setState({
            loading: false
          })
        }); 
      } else {
        this.setState({
          loading: false
        })
      }  
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
        loading = {this.state.loading}
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
