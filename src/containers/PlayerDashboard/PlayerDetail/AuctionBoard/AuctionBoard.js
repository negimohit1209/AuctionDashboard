import React from 'react';
import classes from './AuctionBoard.module.css';
import ScoreBoard from '../../../../components/ScoreBoard/ScoreBoard';
import Paper from '../../../../components/Paper/Paper';
import Fab from '@material-ui/core/Fab';

const AuctionBoard = (props) => {

  return (
    <div className={classes.auction}>
    <Paper>
    <ScoreBoard score={props.score}/>
    <div className={classes.outerbutton}>
      <div className={classes.button}>
      <Fab color="#f44336" aria-label="minus" className={classes.fab} onClick={props.decrement}>
      <i class="material-icons">
        remove
      </i>
      </Fab>
      </div>
      <div className={classes.button}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.increment}>
      <i class="material-icons">
shopping_cart
</i>
      </Fab>
      </div>
      <div className={classes.button}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.increment}>
      <i class="material-icons">
        add
      </i>
      </Fab>
      </div>
    </div>
    </Paper>
    
    </div>
  )
}

export default AuctionBoard
