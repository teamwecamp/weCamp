import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import CampStepper from "./CampStepper";
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Swal from "sweetalert2";

//This is styling for the form only. 
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

class CampRegistrationPage4 extends Component {
  state = {
    activeStep: 3,
    programs: [
      {
        programTitle: "",
        cost: "",
        startTime: "",
        endTime: "",
        type: "",
        age: "",
        gender: "",
        startDate: "",
        endDate: ""
      }
    ]
  };
  componentDidMount = () => {
    this.getDropDowns();
  };

  getDropDowns = () => {
    const action = { type: "FETCH_SEARCH_CAMPS_DROP_DOWN" };
    this.props.dispatch(action);
  };

  handleAddProgram = () => {
    console.log(this.state);
    Swal.fire({title: 'Your information has been received and will be reviewed by our team before it is added to the website.',
    type: 'success'})
    this.props.history.push("/landing");
  };

  handleAddMorePrograms = event => {
    this.setState({
      programs: [
        ...this.state.programs,
        {
          programTitle: "",
          cost: "",
          startTime: "",
          endTime: "",
          type: "",
          age: "",
          gender: "",
          startDate: "",
          endDate: ""
        
        }
      ]
    });
  };

  handleInputChangeFor = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  };
  
  autoFill = () => {
    this.setState({
      programTitle: "Horse and Hike",
      cost: "$750.00",
      startTime: "08:00",
      endTime: "01:00",
      type: "1",
      age: "12",
      gender: "1",
      startDate: "2019-06-01",
      endDate: "2019-06-08"
    })
    console.log('state', this.state);

  }

// This will add the current programs to the state array and make new dropdowns.
  handleProgramChange = (index, key) => event => {
    let programs = [...this.state.programs];
    let program = {
      ...programs[index],
      [key]: event.target.value
    };
    programs[index] = program;
    this.setState({
      programs: programs
    });
  };

  render() {
    const { classes } = this.props;
   
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <h1>Camp Registration</h1>
        <form>
          {this.state.programs.map((program, i) => {
            return (
              <div>
                <TextField
                  required
                  id="outlined-programTitle"
                  label="Program Title"
                  className={classes.textField}
                  // value={program.programTitle}
                  value={this.state.programTitle}
                  onChange={this.handleProgramChange(i, "programTitle")}
                  margin="normal"
                  style={{ width: 300 }}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <TextField
                  required
                  id="outlined-cost"
                  label="Cost"
                  className={classes.textField}
                  // value={program.cost}
                  value={this.state.cost}
                  onChange={this.handleProgramChange(i, "cost")}
                  margin="normal"
                  style={{ width: 300 }}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <TextField
                  id="outlined-startTime"
                  label="Start Time"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" />
                  }}
                  type="time"
                  className={classes.textField}
                  // value={program.startTime}
                  value={this.state.startTime}
                  onChange={this.handleProgramChange(i, "startTime")}
                  margin="normal"
                  style={{ width: 300 }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-endTime"
                  label="End Time"
                  type="time"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" />
                  }}
                  className={classes.textField}
                  // value={program.endTime}
                  value={this.state.endTime}
                  onChange={this.handleProgramChange(i, "startTime")}
                  margin="normal"
                  style={{ width: 300 }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-type"
                  select
                  label="Camp Type"
                  className={classes.textField}
                  // value={program.type}
                  value={this.state.type}
                  onChange={this.handleProgramChange(i, "type")}
                  variant="outlined"
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  style={{ width: 175 }}
                  margin="normal"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                >
                  {this.props.dropDown.campType !== undefined &&
                    this.props.dropDown.campType.map(type => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.type}
                      </MenuItem>
                    ))}
                </TextField>
                <TextField
                  required
                  id="outlined-age"
                  label="Age"
                  className={classes.textField}
                  // value={program.age}
                  value={this.state.age}
                  onChange={this.handleProgramChange(i, "age")}
                  margin="normal"
                  style={{ width: 100 }}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                />
                <TextField
                  //required
                  id="outlined-type"
                  select
                  label="Gender"
                  className={classes.textField}
                  // value={program.gender}
                  value={this.state.gender}
                  onChange={this.handleProgramChange(i, "gender")}
                  variant="outlined"
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  style={{ width: 175 }}
                  margin="normal"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
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
                  id="outlined-icon"
                  label=" Start Date"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" />
                  }}
                  type="date"
                  className={classes.textField}
                  // value={program.startDate}
                  value={this.state.startDate}
                  onChange={this.handleProgramChange(i, "startDate")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-icon"
                  label=" End Date"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" />
                  }}
                  type="date"
                  className={classes.textField}
                  // value={program.endDate}
                  value={this.state.endDate}
                  onChange={this.handleProgramChange(i, "endDate")}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            );
          })}

          <Button
            className={classes.button}
            id="add-btn"
            onClick={this.handleAddMorePrograms}
            variant="contained"
          >
            Add More
          </Button>

          <Button
            className={classes.button}
            id="submit-btn"
            onClick={this.handleAddProgram}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            onClick={this.autoFill}>
          </Button>
        </form>
        <CampStepper step = {this.state.activeStep}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

CampRegistrationPage4.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = reduxStore => ({
  dropDown: reduxStore.setSearchCamps.setCampDropDown
});

export default connect(mapStateToProps)(
  withStyles(styles)(CampRegistrationPage4)
);
