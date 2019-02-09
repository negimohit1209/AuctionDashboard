import React from 'react';
import Aux from '../../../hoc/Auxillary';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import AuctionBoard from './AuctionBoard/AuctionBoard';
import PlayerAcheivments from './PlayerAcheivments/PlayerAcheivments';
const PlayerDetail = (props) => {
  return (
    <Aux>
      <PlayerInfo player={ props.player }/>
      <PlayerAcheivments />
      <AuctionBoard score={props.score} increment={props.increment} decrement={props.decrement} reset={props.reset}/>
    </Aux>
  )
}

export default PlayerDetail;
