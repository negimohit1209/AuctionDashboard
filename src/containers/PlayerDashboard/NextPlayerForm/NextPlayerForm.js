import React from 'react';
// import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxillary';


const NextPlayerForm = props => {
  return (
      <Aux>
      <h1>Next Player Form</h1>
      <p>Enter the number of the player.</p>
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={props.clicked}>Rules</button>
      </Aux>
  )
}

// NextPlayerForm.propTypes = {

// }

export default NextPlayerForm
