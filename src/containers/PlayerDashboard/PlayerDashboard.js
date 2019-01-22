import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Welcome from './Welcome/Welcome';
import PlayerDetail from './PlayerDetail/PlayerDetail';
import NextPlayerForm from './NextPlayerForm/NextPlayerForm';
import Players from '../../Dataset/Player';
export default class PlayerDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayWelcomePage: true,
      displayPlayerDetail: false,
      playerNumberToBeDisplayed: null,
      players: Players,
      player: null,
      auctionScore: 0
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
    let player = this.state.players.find((player) => player.number === this.state.playerNumberToBeDisplayed)
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
  render() {
    let display;
    if(this.state.displayWelcomePage){
      display = <Welcome clicked={this.StartAuction}/>
    }else{
      if(this.state.displayPlayerDetail){
        
        display = <PlayerDetail 
        player={this.state.player}
        score={this.state.auctionScore}
        increment={() => this.auctionIncrement(100)}
        decrement = {()=> this.auctionDecrement(100)}
        reset = {this.auctionReset}
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
