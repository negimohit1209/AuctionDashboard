// import React from 'react';
// // import PropTypes from 'prop-types'
// import Aux from '../../../hoc/Auxillary';


// const NextPlayerForm = props => {
//   return (
//       <Aux>
//       <h1>Next Player Form</h1>
//       <p>Enter the number of the player.</p>
//       <form onSubmit={props.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" onChange={props.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       <button onClick={props.clicked}>Rules</button>
//       </Aux>
//   )
// }

// // NextPlayerForm.propTypes = {

// // }

// export default NextPlayerForm

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Aux from '../../../hoc/Auxillary';
const styles = theme => ({
  container: {
    justifyContent: 'center',
    marginTop: "250px"
    // position:"relative",
    // top: "25%",
    // left: "25%"
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Aux>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.props.handleSubmit}>
      <div>
      <TextField
      id="outlined-name"
      label="Number"
      className={classes.textField}
      onChange={this.props.handleChange}
      margin="normal"
      variant="outlined"
    />
      </div>
      <Button variant="contained" color="secondary" onClick={this.props.clicked} className={classes.button}>
      Rules
    </Button>
        <Button variant="contained" color="primary" value="Submit" type="Submit" className={classes.button}>
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      </form>
      </Aux>
      
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
