import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Welcome from './Welcome/Welcome';
import PlayerDetail from './PlayerDetail/PlayerDetail';
import NextPlayerForm from './NextPlayerForm/NextPlayerForm';
export default class PlayerDashboard extends Component {
  render() {
    let display;
    if(this.props.displayWelcomePage){
      display = <Welcome clicked={this.props.StartAuction}/>
    }else{
      if(this.props.displayPlayerDetail){
        
        display = <PlayerDetail 
        player={this.props.player}
        playerTeam = {this.props.playerTeam}
        auctionScore = {this.props.auctionScore}
        openmodal = {this.props.selectTeam}
        score={this.props.auctionScore}
        teams = {this.props.teams}
        increment={this.props.auctionIncrement}
        modalOpen={this.props.modalOpen}
        decrement = {this.props.auctionDecrement}
        reset = {this.auctionReset}
        modalClose = {this.props.modalClose}
        handleTeamSelect = {this.props.handleTeamSelect}
        handleSold = {this.props.handleSold}
        />
      }else{
        display = <NextPlayerForm 
          clicked={this.props.OpenRulePage}
          playerNumber = {this.props.playerNumberToBeDisplayed}
          handleChange = {this.props.handleNextPlayerFormChange}
          handleSubmit = {this.props.handleNextPlayerFormSubmit}
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
