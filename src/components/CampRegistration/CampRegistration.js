import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import CampStepper from './CampStepper';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

// Below are the styles for the form
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#127696',
    },
    secondary: {
      main: '#d5cb92',
    }
  },
});


//Below is the local array for  the religion and accessibility dropdowns
//on the server religion and accessibility will be switched to a boolean

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
    this.getDropDowns();
  }

  //this will get all the needed objects for the drops downs.
  getDropDowns = () => {
    const action = { type: "FETCH_SEARCH_CAMPS_DROP_DOWN" };
    this.props.dispatch(action);
  };

  handleInputChangeFor = propertyName => event => {
         this.setState({
      [propertyName]:event.target.value
    });
  };

  handleNext = () => {
      this.props.history.push('/campregistrationpage2');
  }

  autoFill = ()=>{
    this.setState({
        campName: "Northern Waters",
        campAddress: "3532 S Lake Blvd.",
        state: "23",
        region: "1",
        startDate: "2019-05-01",
        endDate: "2019-08-31",
        minAge: "9",
        maxAge: "15",
        gender: "3",
        religion: "no",
        accessibility: "no",      
    })
  }


  render() {
    console.log(this.props.dropDown);
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <h1>Camp Registration</h1>

        <form
          id="input-form"
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-icon"
            label=" Camp Name"
            className={classes.textField}
            value={this.state.campName}
            onChange={this.handleInputChangeFor("campName")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-icon"
            label=" Address"
            className={classes.textField}
            value={this.state.campAddress}
            onChange={this.handleInputChangeFor("campAddress")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
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
            required
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
            label="Start Date"
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
            label="End Date"
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
            label=" Min Age"
            className={classes.textField}
            value={this.state.minAge}
            onChange={this.handleInputChangeFor("minAge")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-icon"
            label=" Max Age "
            className={classes.textField}
            value={this.state.maxAge}
            onChange={this.handleInputChangeFor("maxAge")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
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
                color="primary"
              >
                Next
              </Button>
          <Button
            onClick={this.autoFill}>
          </Button>
          {/* The above code will be run only when states is not undefined. */}
        </form>
        <CampStepper />
        </MuiThemeProvider>
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
