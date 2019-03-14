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


class CampRegistrationPage2 extends Component {
    state = {
        costMin:'',
        costMax:'',
        regDeadlineDate:'',
        phoneNumber:'',
        instagramLink:'',
        facebookLink:'',
        iconUrl:'',
        logoUrl:'',
        websiteUrl:'',
        type:'',
        
    }
    componentDidMount = () => {
        //insert action to get drop down info here.
        this.getDropDowns();
    }
    getDropDowns = () => {
        const action = {type: 'FETCH_SEARCH_CAMPS_DROP_DOWN'};
        this.props.dispatch(action);
    }
    handleInputChangeFor = propertyName => event => {
        this.setState({
     [propertyName]:event.target.value
   });
 };
 handleNext = () => {
    this.props.history.push('/campregistrationpage3');
}

    render() {
        console.log(this.props.dropDown);
        const { classes } = this.props;
        return (
            <div>
            <h1>Camp Registration Page 2</h1>
            <form
          id="input-form"
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-icon"
            label=" Cost Min"
            className={classes.textField}
            value={this.state.costMin}
            onChange={this.handleInputChangeFor("costMin")}
            margin="normal"
            variant="standard"
          />
          <TextField
            required
            id="outlined-icon"
            label=" Cost Max"
            className={classes.textField}
            value={this.state.costMax}
            onChange={this.handleInputChangeFor("costMax")}
            margin="normal"
            variant="standard"
          />
          <TextField
            required
            id="outlined-icon"
            label=" Registration Deadline"
            type="date"
            className={classes.textField}
            value={this.state.regDeadlineDate}
            onChange={this.handleInputChangeFor("regDeadlineDate")}
            margin="normal"
            variant="standard"
          />
          <TextField
            required
            id="outlined-icon"
            label="Phone Number"
            className={classes.textField}
            value={this.state.phoneNumber}
            onChange={this.handleInputChangeFor("phoneNumber")}
            margin="normal"
            variant="standard"
          />
          </form>
            </div>
        )
    }
}

CampRegistrationPage2.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(withStyles(styles)(CampRegistrationPage2));