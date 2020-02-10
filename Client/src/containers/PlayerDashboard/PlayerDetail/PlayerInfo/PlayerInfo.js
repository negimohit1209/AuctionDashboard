import React from 'react';
import ImageAvatars from '../../../../components/Avatar/Avatar';
import classes from './Playerinfo.module.css';
import Paper from '../../../../components/Paper/Paper';
import Typography from '@material-ui/core/Typography';
import LetterAvatars from '../../../../components/Positionbadges/Positionbadges';

const PlayerInfo = (props) => {
  let department = props.player.department
  if(props.player.department === "Electronics and Telecommunication Engineering"){
    department = "Electronics and Telecommunication"
  }
  if(props.player.department === "Architecture, Town and Regional Planning"){
    department = "Architecture"
  }
  return (
    <div className={classes.Details}>
      <div className="Avatar">
        
        <ImageAvatars image={props.player.photo} size="big" team={props.player.teamName}/>
      </div>
      <div className={classes.Upinfo}>
        <Paper>
          <div className={classes.Info}>
          <Typography variant="h5" component="h2">
          {props.player.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {department}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.hostel}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player.year}
        </Typography>
          <LetterAvatars position={props.player.position}/>
          </div>
        </Paper>
        </div> 
    </div>
  )
}

export default PlayerInfo;
