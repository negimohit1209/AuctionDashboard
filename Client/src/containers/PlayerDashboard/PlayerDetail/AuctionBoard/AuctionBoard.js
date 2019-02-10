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
      <Fab color="secondary" aria-label="minus" className={classes.fab} onClick={() => props.decrement(100)}>
      <i className="material-icons">
        remove
      </i>
      </Fab>
      </div>
      <div className={classes.button}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.modalOpen}>
      <i className="material-icons">
      shopping_cart
      </i>
      </Fab>
      </div>
      <div className={classes.button}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => props.increment(100)}>
      <i className="material-icons">
      add
      </i>
      </Fab>
      </div>
      <div className={classes.button}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => props.increment(50)}>
      <i className="material-icons">
        add
      </i>
      </Fab>
      </div>
      <div className={classes.button}>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => props.increment(10)}>
      <i className="material-icons">
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
