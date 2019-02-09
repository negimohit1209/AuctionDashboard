import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    marginright: 10,
    width: 250,
    height: 250,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
      <Avatar alt="Remy Sharp" src="assets/3.JPG" className={classes.bigAvatar} />
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);