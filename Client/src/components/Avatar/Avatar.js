import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Aux from '../../hoc/Auxillary';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 250,
    height: 250,
  },
  bigAvatarSold: {
    margin: 10,
    width: 250,
    height: 250,
    position: "absolute",
    top: "20px",
    left: "40px",
    opacity: "0.6"
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
  let team = props.team
  if(size === "big"){
    if(team === undefined){
      return (
        <Avatar alt="o" src={src} className={classes.bigAvatar} />
    );
    }else{
      return (
        <Aux>
        <Avatar alt="o" src={src} className={classes.bigAvatar} />
        <Avatar alt="o" src='assets/sold.png' className={classes.bigAvatarSold} />
        </Aux>
        
    );
    }
    
  }
  if(size === "small"){
    return (
      <Avatar alt="o" src={src} className={classes.smallAvatar} />
  );
  }

}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);