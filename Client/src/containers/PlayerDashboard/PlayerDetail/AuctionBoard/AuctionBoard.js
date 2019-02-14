import React from 'react';
import classes from './AuctionBoard.module.css';
import ScoreBoard from '../../../../components/ScoreBoard/ScoreBoard';
import Paper from '../../../../components/Paper/Paper';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const AuctionBoard = (props) => {
  let showbutton = null;
  if(props.showbutton === true){
    showbutton = <div className={classes.outerbutton}>
    <div className={classes.button}>
    <Fab color="secondary" aria-label="minus" className={classes.fab} onClick={() => props.decrement(100)}>
    -100
    </Fab>
    </div>
    <div className={classes.button}>
    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => props.increment(100)}>
    +100
    </Fab>
    </div>
    <div className={classes.button}>
    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => props.increment(50)}>
    +50
    </Fab>
    </div>
  </div>
  }else{
     showbutton = <Typography variant="h3" component="h2">
     {props.team} FC
   </Typography>
  }

  return (
    <div className={classes.auction}>
    <Paper>
    <ScoreBoard score={props.score}/>
    {showbutton}
    </Paper>
    
    </div>
  )
}

export default AuctionBoard
