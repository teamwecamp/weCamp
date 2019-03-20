import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

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

class CampRegistrationPage4 extends Component {
  state = {
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
        <h1>Camp Registration Page 4</h1>
        <form>
          {this.state.programs.map((program, i) => {
            return (
              <div>
                <TextField
                  required
                  id="outlined-programTitle"
                  label="Program Title"
                  className={classes.textField}
                  value={program.programTitle}
                  onChange={this.handleProgramChange(i, "programTitle")}
                  margin="normal"
                  style={{ width: 300 }}
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-cost"
                  label="Cost"
                  className={classes.textField}
                  value={program.cost}
                  onChange={this.handleProgramChange(i, "cost")}
                  margin="normal"
                  style={{ width: 300 }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-startTime"
                  label="Start Time"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" />
                  }}
                  type="time"
                  className={classes.textField}
                  value={program.startTime}
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
                  value={program.endTime}
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
                  value={program.type}
                  onChange={this.handleProgramChange(i, "type")}
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
                <TextField
                  required
                  id="outlined-age"
                  label="Age"
                  className={classes.textField}
                  value={program.age}
                  onChange={this.handleProgramChange(i, "age")}
                  margin="normal"
                  style={{ width: 100 }}
                  variant="outlined"
                />
                <TextField
                  //required
                  id="outlined-type"
                  select
                  label="Gender"
                  className={classes.textField}
                  value={program.gender}
                  onChange={this.handleProgramChange(i, "gender")}
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
                  id="outlined-icon"
                  label=" Start Date"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" />
                  }}
                  type="date"
                  className={classes.textField}
                  value={program.startDate}
                  onChange={this.handleProgramChange(i, "startDate")}
                  margin="normal"
                  variant="standard"
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
                  value={program.endDate}
                  onChange={this.handleProgramChange(i, "endDate")}
                  margin="normal"
                  variant="standard"
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
          >
            Submit
          </Button>
        </form>
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
