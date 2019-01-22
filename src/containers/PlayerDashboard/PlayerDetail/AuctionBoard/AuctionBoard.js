import React from 'react'

const AuctionBoard = (props) => {
  return (
    <div>
    <h1>Auction board goes here.</h1>
    <p>{props.score}</p>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
    <button onClick={props.reset}>Reset</button>
    </div>
  )
}

export default AuctionBoard
