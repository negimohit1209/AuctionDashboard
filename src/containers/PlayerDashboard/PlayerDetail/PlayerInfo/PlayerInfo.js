import React from 'react';
const PlayerInfo = (props) => {
  return (
    <div>
        <h1>Player Info component</h1>
        <p>{props.player.name}</p>
    </div>
  )
}

export default PlayerInfo
