import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Welcome from './Welcome/Welcome';
import PlayerDetail from './PlayerDetail/PlayerDetail';
import NextPlayerForm from './NextPlayerForm/NextPlayerForm';
import axios from 'axios';
export default class PlayerDashboard extends Component {
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

  StartAuction = () => {
    this.setState({displayWelcomePage: false})
  }
  OpenRulePage = () => {
    this.setState({displayWelcomePage: true})
  }
  handleNextPlayerFormSubmit = (event) => {
    event.preventDefault();
    let player = this.props.players.find((player) => player.Number === this.state.playerNumberToBeDisplayed)
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

  handleSold = (player, team ,price) => {
      alert(`${price}`)
      this.setState({
      displayWelcomePage: false,
      displayPlayerDetail: false,
      playerNumberToBeDisplayed: null,
      player: null,
      auctionScore: 0,
      selectTeam: false,
      playerTeam: ""
        })
        
  }
  render() {
    let display;
    if(this.state.displayWelcomePage){
      display = <Welcome clicked={this.StartAuction}/>
    }else{
      if(this.state.displayPlayerDetail){
        
        display = <PlayerDetail 
        player={this.state.player}
        playerTeam = {this.state.playerTeam}
        auctionScore = {this.state.auctionScore}
        openmodal = {this.state.selectTeam}
        score={this.state.auctionScore}
        teams = {this.props.teams}
        increment={this.auctionIncrement}
        modalOpen={this.modalOpen}
        decrement = {()=> this.auctionDecrement(100)}
        reset = {this.auctionReset}
        modalClose = {this.modalClose}
        handleTeamSelect = {this.handleTeamSelect}
        handleSold = {this.handleSold}
        />
      }else{
        display = <NextPlayerForm 
          clicked={this.OpenRulePage}
          playerNumber = {this.state.playerNumberToBeDisplayed}
          handleChange = {this.handleNextPlayerFormChange}
          handleSubmit = {this.handleNextPlayerFormSubmit}
          />
      }
    }
    return (
      <Aux>
        {display}
      </Aux>
    )
  }
}
