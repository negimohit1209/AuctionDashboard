import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import classes from './TeamDashboard.module.css'

export default class PlayerDashboard extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Card}>
          {this.props.teams.map((team,index) => {
            return (<SimpleCard key={index} name={team.Name} Amount={team.Amount} noOfPlayers={team.noOfPlayers}/>)
          })}
        </div>
      </Aux>
    )
  }
}