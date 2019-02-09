import React from 'react';
import Paper from '../Paper/Paper';
import classes from './Score.module.css';
const Score = (props) => {
  return (
      <div className={classes.score}>
      <Paper>
      <h3>{props.score}</h3>
      </Paper>
      </div> 
  )
}

export default Score
