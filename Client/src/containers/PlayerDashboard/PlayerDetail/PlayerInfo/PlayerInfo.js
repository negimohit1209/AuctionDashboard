import React from 'react';
import ImageAvatars from '../../../../components/Avatar/Avatar';
import classes from './Playerinfo.module.css';
import Paper from '../../../../components/Paper/Paper';
import Typography from '@material-ui/core/Typography';
import LetterAvatars from '../../../../components/Positionbadges/Positionbadges';

const PlayerInfo = (props) => {
  let department = props.player.Department
  if(props.player.Department === "Electronics and Telecommunication Engineering"){
    department = "Electronics and Telecommunication"
  }
  if(props.player.Department === "Architecture, Town and Regional Planning"){
    department = "Architecture"
  }
  return (
    <div className={classes.Details}>
      <div className="Avatar">
        
        <ImageAvatars image={props.player.Number} size="big" team={props.player.Team}/>
      </div>
      <div className={classes.Upinfo}>
        <Paper>
          <div className={classes.Info}>
          <Typography variant="h5" component="h2">
          {props.player.Name}
        </Typography>
        <Typography variant="h5" component="h2">
          {department}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.Hostel}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.Year}
        </Typography>
          <LetterAvatars position={props.player.Position}/>
          </div>
        </Paper>
        </div> 
    </div>
  )
}

export default PlayerInfo;
