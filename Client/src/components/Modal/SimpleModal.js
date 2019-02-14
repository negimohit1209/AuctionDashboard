import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TeamsRadio from './TeamsRadio';
import myclasses from './SimpleModal.module.css';

function getModalStyle() {
  const top = 50 
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});



class SimpleModal extends React.Component {
  
  render() {
    
    const { classes } = this.props;
    let button = null;
    if(this.props.playerTeam){
      button = <Button variant="contained" color="secondary" className={classes.button} onClick={() => this.props.handleSold(this.props.player, this.props.playerTeam , this.props.auctionScore)}>
            Sell
          </Button>
    }
    let mydiv = null
    console.log(this.props.loading)
    if(this.props.loading === false){
      mydiv = <div style={getModalStyle()} className={classes.paper}>
      <Typography variant="h6" id="modal-title">
        Sell Player No. {this.props.player.Number} i.e "{this.props.player.Name}" for {this.props.auctionScore} points to:
      </Typography>
      <TeamsRadio playerTeam={this.props.playerTeam} teams={this.props.teams} handleChange={(e) => this.props.handleTeamSelect(e)}/>
      {button}
    </div>
    }else{
      mydiv = <div style={getModalStyle()} className={classes.paper}>
      <div>
        <div className={myclasses.hourglass}></div>
      </div>
          
            </div>
    }
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
            >
            {mydiv}
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;