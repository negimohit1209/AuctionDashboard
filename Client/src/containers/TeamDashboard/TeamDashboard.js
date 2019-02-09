import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import classes from './TeamDashboard.module.css'

export default class PlayerDashboard extends Component {
  render() {
    return (
      <Aux>
        <h1>Team area</h1>
        <div className={classes.Card}>
          <SimpleCard name="Team A"/>
          <SimpleCard name="Team B"/>
          <SimpleCard name="Team C"/>
          <SimpleCard name="Team D"/>
          <SimpleCard name="Team E"/>
        </div>
        
      </Aux>
    )
  }
}