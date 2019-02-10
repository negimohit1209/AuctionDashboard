import React from 'react';
import Aux from '../../../hoc/Auxillary';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import AuctionBoard from './AuctionBoard/AuctionBoard';
import PlayerAcheivments from './PlayerAcheivments/PlayerAcheivments';
import SimpleModal from '../../../components/Modal/SimpleModal';
const PlayerDetail = (props) => {
  return (
    <Aux>
      <PlayerInfo player={ props.player }/>
      <PlayerAcheivments />
      <AuctionBoard score={props.score} increment={props.increment} decrement={props.decrement} reset={props.reset} modalOpen = {props.modalOpen}/>
      <SimpleModal open={props.openmodal} handleClose={props.modalClose} player={ props.player } auctionScore={props.auctionScore} playerTeam={props.playerTeam} handleTeamSelect={props.handleTeamSelect} handleSold={props.handleSold} teams={props.teams}/>
    </Aux>
  )
}

export default PlayerDetail;
