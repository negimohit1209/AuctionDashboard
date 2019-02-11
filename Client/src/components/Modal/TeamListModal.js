import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TeamsRadio from './TeamsRadio';
import Table from '../Table/Table';

function getModalStyle() {
  const top = 10 
  const left = 10

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 150,
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
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
            >
          <div style={getModalStyle()} className={classes.paper}>
            <Table teamList={this.props.teamList}/>
          </div>
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