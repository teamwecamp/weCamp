import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Input } from "@material-ui/core";

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
  },
  button:{
   
  }
});

const religion = ["yes", "no"];
const accessibility = ["yes", "no"];

class CampRegistration extends Component {
  state = {
    campName: "",
    campAddress: "",
    state: "",
    region: "",
    startDate: "",
    endDate: "",
    minAge: "",
    maxAge: "",
    gender: "",
    religion: "",
    accessibility: ""
  };
  componentDidMount() {
    //insert action to get drop down info here.
    console.log("consolelog component did mount");
    this.getDropDowns();
  }

  getDropDowns = () => {
    const action = { type: "FETCH_SEARCH_CAMPS_DROP_DOWN" };
    this.props.dispatch(action);
    console.log("GET DROP DOWNS", action);
  };

  handleInputChangeFor = propertyName => event => {
         this.setState({
      [propertyName]:event.target.value
    });
  };
  handleNext = () => {
      this.props.history.push('/campregistrationpage2');
  }

  render() {
    console.log(this.props.dropDown);
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
            onChange={this.handleInputChangeFor("campName")}
            margin="normal"
            variant="standard"
          />
          <TextField
            required
            id="outlined-icon"
            label=" Address Required"
            className={classes.textField}
            value={this.state.campAddress}
            onChange={this.handleInputChangeFor("campAddress")}
            margin="normal"
            variant="standard"
          />
          <TextField
            //required
            id="outlined-type"
            select
            label="State"
            className={classes.textField}
            value={this.state.state}
            onChange={this.handleInputChangeFor("state")}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            style={{ width: 200 }}
            margin="normal"
          >
            {this.props.dropDown.states !== undefined &&
              this.props.dropDown.states.map(type => (
                <MenuItem key={type.id} value={type.id}>
                  {type.state}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            //required
            id="outlined-type"
            select
            label="Region"
            className={classes.textField}
            value={this.state.region}
            onChange={this.handleInputChangeFor("region")}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            style={{ width: 175 }}
            margin="normal"
          >
            {this.props.dropDown.regions !== undefined &&
              this.props.dropDown.regions.map(type => (
                <MenuItem key={type.id} value={type.id}>
                  {type.region}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            required
            id="outlined-startdate"
            label="Start Date Required"
            InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            type="date"
            className={classes.textField}
            value={this.state.startDate}
            onChange={this.handleInputChangeFor("startDate")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-enddate"
            label="End Date Required"
            InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            type="date"
            className={classes.textField}
            value={this.state.endDate}
            onChange={this.handleInputChangeFor("endDate")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-icon"
            label=" Min Age Required"
            className={classes.textField}
            value={this.state.minAge}
            onChange={this.handleInputChangeFor("minAge")}
            margin="normal"
            variant="standard"
          />
          <TextField
            required
            id="outlined-icon"
            label=" Max Age Required"
            className={classes.textField}
            value={this.state.maxAge}
            onChange={this.handleInputChangeFor("maxAge")}
            margin="normal"
            variant="standard"
          />
          <TextField
            //required
            id="outlined-type"
            select
            label="Gender"
            className={classes.textField}
            value={this.state.gender}
            onChange={this.handleInputChangeFor("gender")}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            style={{ width: 175 }}
            margin="normal"
          >
            {this.props.dropDown.gender !== undefined &&
              this.props.dropDown.gender.map(type => (
                <MenuItem key={type.id} value={type.id}>
                  {type.gender}
                </MenuItem>
              ))}
          </TextField>
          <TextField
            required
            id="outlined-type"
            select
            label="Religion"
            className={classes.textField}
            value={this.state.religion}
            onChange={this.handleInputChangeFor("religion")}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            style={{ width: 175 }}
            margin="normal"
          >
            {religion.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="outlined-type"
            select
            label="Accessibility"
            className={classes.textField}
            value={this.state.accessibility}
            onChange={this.handleInputChangeFor("accessibility")}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            style={{ width: 175 }}
            margin="normal"
          >
            {accessibility.map(type => (
              <MenuItem key={type} value={type}>
                {type}
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
          {/* The above code will be run only when states is not undefined. */}
        </form>
      </div>
    );
  }
}

CampRegistration.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = reduxStore => ({
  dropDown: reduxStore.setSearchCamps.setCampDropDown
});

export default connect(mapStateToProps)(withStyles(styles)(CampRegistration));
