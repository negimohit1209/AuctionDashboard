import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import classes from './TeamDashboard.module.css';
import TeamListModal from '../../components/Modal/TeamListModal';
import axios from 'axios';

export default class PlayerDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      teamList: [],
      modalOpen: false
    }
  }
  modalClose = () => {
    this.setState({
      modalOpen: false,
      teamList: []
    })
  }
  handleViewClick = (id) => {
    axios.get(`http://localhost:5000/api/teams/${id}`)
    .then(res => this.setState({
      teamList: res.data,
      modalOpen: true
    }))
    // this.setState({
    //   modalOpen:true
    // })
  }
  render() {
    return (
      <Aux>
      <div className={classes.fullscreen}>
      <div className={classes.Card}>
      {this.props.teams.map((team,index) => {
        return (<SimpleCard key={index} name={team.Name} Amount={team.Amount} noOfPlayers={team.noOfPlayers} id={team._id} handleViewClick={this.handleViewClick} teamList={this.state.teamList} modalOpen={this.modalOpen}/>)
      })}
    </div>
      <TeamListModal open={this.state.modalOpen} handleClose={this.modalClose} teamList={this.state.teamList}/>
      </div>
        
      </Aux>
    )
  }
}