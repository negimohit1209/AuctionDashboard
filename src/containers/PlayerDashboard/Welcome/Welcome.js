import React from 'react'
import Aux from '../../../hoc/Auxillary';
export default function Welcome(props) {
  return (
    <Aux>
    <h1>welcome message comes here.</h1>
    <p>Rules</p>
    <button onClick={props.clicked}>Start</button>
    </Aux>
  )
}
