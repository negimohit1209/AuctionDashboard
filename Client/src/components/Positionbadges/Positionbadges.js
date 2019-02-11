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
  if(props.position === 'Mid-fielder')
  avatar = <Avatar className={classes.purpleAvatar}>MF</Avatar>
  if(props.position === 'Goalkeeper')
  avatar = <Avatar className={classes.avatar}>GK</Avatar>
  if(props.position === 'Forward')
  avatar = <Avatar className={classes.greenAvatar}>ST</Avatar>
  if(props.position === 'Defender')
  avatar = <Avatar className={classes.orangeAvatar}>DEF</Avatar>
  return (
    <Grid container justify="center" alignItems="center">
      {avatar}
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);