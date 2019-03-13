import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    description: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 1000
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 400,
    }
  });


class CampRegistration extends Component {
    state = {
        campName:'',
        campAddress:'',
        state:'',
        region:'',
        startDate:'',
        endDate:'',
        minAge:'',
        maxAge:'',
        gender:'',
        religion:'',
        accessibility:'',
    }
    componentDidMount = () => {
        //insert action to get drop down info here.
        this.getDropDowns();
    }
    getDropDowns = () => {
        const action = {type: 'FETCH_SEARCH_CAMPS_DROP_DOWN'};
        this.props.dispatch(action);
    }
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
      }

    render() {
        const { classes } = this.props;
        return (
            <div>
            <h1>Camp Registration Page 1</h1>
            <form
              id="input-form"
              className={classes.container}
              noValidate
              autoComplete="off"
              >
                <TextField
                required
                id="outlined-icon"
                label=" Camp Name Required"
                className={classes.textField}
                value={this.state.campName}
                onChange={this.handleInputChangeFor('campName')}
                margin="normal"
                variant="standard"
              />
              <TextField
                required
                id="outlined-icon"
                label=" Address Required"
                className={classes.textField}
                value={this.state.campAddress}
                onChange={this.handleInputChangeFor('campAddress')}
                margin="normal"
                variant="standard"
              />
              <TextField
                required
                id="outlined-type"
                select
                label="State"
                className={classes.textField}
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                style = {{width: 75}}
                margin="normal"
              >
                {this.props.reduxStore.setCampDropDown.states.map(type => (
                  <MenuItem key={type.id} value={type.id}>
                  {type}
                  </MenuItem>
                ))}
              </TextField>

            </form>
            </div>
        )
    }
}

CampRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(withStyles(styles)(CampRegistration));