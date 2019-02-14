import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: "#4caf50",
  },
};

function LetterAvatars(props) {
  const { classes } = props;
  let avatar;
  let mid, gk, fwd, def;
  if(props.position === 'Mid-fielder'){
    mid = <Avatar className={classes.greenAvatar}>MF</Avatar>
  }
  else{
    mid = <Avatar className={classes.avatar}>MF</Avatar>
  }
  if(props.position === 'Goalkeeper'){
    gk = <Avatar className={classes.greenAvatar}>GK</Avatar>
  }
  else{
    gk = <Avatar className={classes.avatar}>GK</Avatar>
  }
  if(props.position === 'Forward'){
    fwd = <Avatar className={classes.greenAvatar}>ST</Avatar>
  }
  else{
    fwd = <Avatar className={classes.avatar}>ST</Avatar>
  }
  if(props.position === 'Defender'){
    def = <Avatar className={classes.greenAvatar}>DEF</Avatar>
  }
  else{
    def = <Avatar className={classes.avatar}>DEF</Avatar>
  }
  return (
    <Grid container justify="center" alignItems="center">
      {gk}
      {def}
      {mid}
      {fwd}
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);