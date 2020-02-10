import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import classes from './TeamDashboard.module.css';
import TeamListModal from '../../components/Modal/TeamListModal';
import axios from 'axios';
import {db} from '../../firebase/firebase';

export default class PlayerDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      teamList: [],
      modalOpen: false,
      teams: []
    }
  }
  componentWillMount(){
    this.setState({
      teams: this.props.teams
    })
  }
  modalClose = () => {
    this.setState({
      modalOpen: false,
      teamList: []
    })
  }
  handleViewClick = (id) => {
    db.collection('teams').doc(id).collection('players').get().then((snapshot) => {
      let docPlayers = snapshot.docs.map(doc => ({...doc.data(), number: doc.id}));
      console.log(docPlayers);
      this.setState({
        teamList: docPlayers,
        modalOpen: true
      });
    });
  }
  render() {
    return (
      <Aux>
      <div className={classes.fullscreen}>
      <div className={classes.Card}>
      {this.props.teams.map((team,index) => {
        return (<SimpleCard key={index} name={team.teamName} Amount={team.amount} noOfPlayers={team.noOfPlayers || 0} id={team.teamName} image={team.captainImage} handleViewClick={this.handleViewClick} teamList={this.state.teamList} modalOpen={this.modalOpen} players={team.playerNo}/>)
      })}
    </div>
      <TeamListModal open={this.state.modalOpen} handleClose={this.modalClose} teamList={this.state.teamList}/>
      </div>
        
      </Aux>
    )
  }
}