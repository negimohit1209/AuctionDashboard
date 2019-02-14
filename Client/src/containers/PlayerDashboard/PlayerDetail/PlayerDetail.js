import React from 'react';
import Aux from '../../../hoc/Auxillary';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import AuctionBoard from './AuctionBoard/AuctionBoard';
import PlayerAcheivments from './PlayerAcheivments/PlayerAcheivments';
import SimpleModal from '../../../components/Modal/SimpleModal';
import Button from '@material-ui/core/Button';
import classes from './PlayerDetail.module.css';
const PlayerDetail = (props) => {
  let board = null;
  let selectTeamButton = null;
  
  if(props.player.Team === undefined){
    board = <AuctionBoard score={props.score} increment={props.increment} decrement={props.decrement} modalOpen = {props.modalOpen} showbutton={true}/>
    selectTeamButton = <Button variant="contained" size="large" color="primary" onClick = {props.modalOpen}>
    <i className="material-icons">
      shopping_cart
      </i>
      Select Team
    </Button>
  }else{
    let myTeam = props.teams.find((team) => props.player.Team === team._id)
    board = <AuctionBoard score={props.player.price} showbutton={false} team={myTeam.Name}/>
  }
  return (
    <Aux>
      <PlayerInfo player={ props.player }/>
      <PlayerAcheivments />
      {board}
      <SimpleModal open={props.openmodal} handleClose={props.modalClose} player={ props.player } auctionScore={props.auctionScore} playerTeam={props.playerTeam} handleTeamSelect={props.handleTeamSelect} handleSold={props.handleSold} teams={props.teams} loading={props.loading}/>
      <div className={classes.button}>
      <Button variant="contained" size="large" color="secondary" onClick={props.backToForm} >
      Back
    </Button>
    {selectTeamButton}
      </div>
      
    </Aux>
  )
}

export default PlayerDetail;
