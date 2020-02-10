import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from '../Avatar/Avatar';
import myclasses from './SImpleCard.module.css'
const styles = {
  card: {
    minWidth: 275,
    margin: "auto",
    width: 300,
    height: 240,
    boxSizing: "border-box" 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} onClick={() => props.handleViewClick(props.id)} >
      <CardContent>
      <div className={myclasses.Outer}>
      <Typography variant="h4" component="h2">
      {props.name}
    </Typography>
    <div className={myclasses.Avatar}>
    <ImageAvatars image={props.image} size="medium"/>
    </div>
  <div className={myclasses.Inner}>
  <Typography component="h6" variant="h6">
  Remaining Purse: <strong>{props.Amount}</strong>
  </Typography>
  <Typography component="h6" variant="h6">
  No of Players: <strong>{props.noOfPlayers}</strong>
  </Typography>
  </div>
      </div>
        
        
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);