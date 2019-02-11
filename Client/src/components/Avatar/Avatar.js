import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 250,
    height: 250,
  },
  smallAvatar: {
    margin: 2,
    width: 38,
    height: 38,
  },
};

function ImageAvatars(props) {
  
  const { classes } = props;
  let src = `assets/${props.image}.jpg`;
  let size = props.size;
  if(size === "big"){
    return (
      <Avatar alt="Remy Sharp" src={src} className={classes.bigAvatar} />
  );
  }
  if(size === "small"){
    return (
      <Avatar alt="Remy Sharp" src={src} className={classes.smallAvatar} />
  );
  }

}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);