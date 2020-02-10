import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class TeamsRadio extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Team"
            name="team"
            className={classes.group}
            value={this.props.selectedValue}
            onChange={this.props.handleChange}
          >{this.props.teams.map(team => (<FormControlLabel value={team.teamName} control={<Radio />} label={team.teamName} key={team.teamName}/>))}
        
          </RadioGroup>
        </FormControl>
        
      </div>
    );
  }
}



export default withStyles(styles)(TeamsRadio);