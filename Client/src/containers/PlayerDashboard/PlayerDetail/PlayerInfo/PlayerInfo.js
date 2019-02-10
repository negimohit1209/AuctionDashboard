import React from 'react';
import ImageAvatars from '../../../../components/Avatar/Avatar';
import classes from './Playerinfo.module.css';
import Paper from '../../../../components/Paper/Paper';
import Typography from '@material-ui/core/Typography';
import LetterAvatars from '../../../../components/Positionbadges/Positionbadges';

const PlayerInfo = (props) => {
  return (
    <div className={classes.Details}>
      <div className="Avatar">
        <ImageAvatars />
      </div>
      <div className={classes.Upinfo}>
        <Paper>
          <div className={classes.Info}>
          <Typography variant="h5" component="h2">
          {props.player.Name}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.Department}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.Hostel}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.Year}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.Availability}
        </Typography>
          <LetterAvatars />
          </div>
        </Paper>
        </div> 
    </div>
  )
}

export default PlayerInfo;
