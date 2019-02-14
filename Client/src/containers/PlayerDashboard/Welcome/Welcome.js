import React from 'react'
import Aux from '../../../hoc/Auxillary';
import Typography from '@material-ui/core/Typography';
import myclasses from './Welcome.module.css';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

export default function Welcome(props) {
  return (
    <Aux>
    <div className={myclasses.center}>
    <Typography variant="h3" component="h2">
    IIEST Football League
  </Typography>
  <br/>
  <Typography variant="h3" component="h2">
    Auction
  </Typography>
  <div onClick={props.clicked} className={myclasses.gap}>
        <Fab variant="extended" color="primary" aria-label="Add">
          <NavigationIcon/>
          Start Auction
        </Fab>
      </div>
    </div>
    <div className={myclasses.moregap}>
    <Typography component="p">
      Developer: <strong>Mohit Negi</strong>
  </Typography>
  <Typography component="p">
  Auctioneer : <strong>Kanav Mehra</strong>
  </Typography>
  <Typography component="p">
  Chairman (IFL) : <strong>Vikas Meena</strong>
  </Typography>
    </div>
    </Aux>
  )
}
