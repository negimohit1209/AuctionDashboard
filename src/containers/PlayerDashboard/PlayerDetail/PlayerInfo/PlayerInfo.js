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
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Name: <strong>Mayukh Barua</strong>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Department: <strong>ETC</strong>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Year: <strong>NA</strong>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Hostel: <strong>Sen Hall</strong>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Availability: <strong> Not Available</strong>
            
          </Typography>
          <LetterAvatars />
          </div>
        </Paper>
        </div> 
    </div>
  )
}

export default PlayerInfo;
