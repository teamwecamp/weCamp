import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import CampStepper from './CampStepper';

//This adds styling to the form.
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  description: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 1000
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 400
  }
});

class CampRegistrationPage2 extends Component {
  state = {
    activeStep: 1,
    costMin: "",
    costMax: "",
    regDeadlineDate: "",
    phoneNumber: "",
    instagramLink: "",
    facebookLink: "",
    photoUrl: "",
    logoUrl: "",
    websiteUrl: "",
    type: ""
  };

  componentDidMount = () => {
    this.getDropDowns();
  };

  getDropDowns = () => {
    const action = { type: "FETCH_SEARCH_CAMPS_DROP_DOWN" };
    this.props.dispatch(action);
  };

  handleInputChangeFor = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  };

  handleNext = () => {
    this.props.history.push("/campregistrationpage3");
  };

  render() {
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
            InputProps={{
              startAdornment: <InputAdornment position="start" />
            }}
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
          <TextField
            id="outlined-icon"
            label="Instagram Link"
            className={classes.textField}
            value={this.state.instagramLink}
            onChange={this.handleInputChangeFor("instagramLink")}
            margin="normal"
            variant="standard"
          />
          <TextField
            id="outlined-icon"
            label="Facebook Link"
            className={classes.textField}
            value={this.state.facebookLink}
            onChange={this.handleInputChangeFor("facebookLink")}
            margin="normal"
            variant="standard"
          />
          <TextField
            id="outlined-icon"
            label="Photo URL"
            className={classes.textField}
            value={this.state.photoUrl}
            onChange={this.handleInputChangeFor("photoUrl")}
            margin="normal"
            variant="standard"
          />
          <TextField
            id="outlined-icon"
            label="Logo URL"
            className={classes.textField}
            value={this.state.logoUrl}
            onChange={this.handleInputChangeFor("logoUrl")}
            margin="normal"
            variant="standard"
          />
          <TextField
            id="outlined-icon"
            label="Website URL"
            className={classes.textField}
            value={this.state.websiteUrl}
            onChange={this.handleInputChangeFor("websiteUrl")}
            margin="normal"
            variant="standard"
          />
          <TextField
            //required
            id="outlined-type"
            select
            label="Camp Type"
            className={classes.textField}
            value={this.state.type}
            onChange={this.handleInputChangeFor("type")}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            style={{ width: 175 }}
            margin="normal"
          >
            {this.props.dropDown.campType !== undefined &&
              this.props.dropDown.campType.map(type => (
                <MenuItem key={type.id} value={type.id}>
                  {type.type}
                </MenuItem>
              ))}
          </TextField>
          <Button
            className={classes.button}
            id="submit-btn"
            onClick={this.handleNext}
            size="small"
            variant="contained"
          >
            Next
          </Button>
        </form>
        <CampStepper step = {this.state.activeStep} />
      </div>
    );
  }
}

CampRegistrationPage2.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = reduxStore => ({
  dropDown: reduxStore.setSearchCamps.setCampDropDown
});

export default connect(mapStateToProps)(
  withStyles(styles)(CampRegistrationPage2)
);
