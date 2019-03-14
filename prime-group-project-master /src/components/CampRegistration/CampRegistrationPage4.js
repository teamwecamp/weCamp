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


class CampRegistrationPage4 extends Component {
    state = {
        programs:[{
            programTitle:'',
            cost:'',
            startTime:'',
            endTime:'',
            type:'',
            age:'',
            gender:'',
            startDate:'',
            endDate:'',
        }],
        
        
    }
    componentDidMount = () => {
        //insert action to get drop down info here.
        this.getDropDowns();
    }
    getDropDowns = () => {
        const action = {type: 'FETCH_SEARCH_CAMPS_DROP_DOWN'};
        this.props.dispatch(action);
    }
    handleAddMorePrograms = event => {
        this.setState({
            programs: [...this.state.programs, 
                {
                    programTitle:'',
                    cost:'',
                    startTime:'',
                    endTime:'',
                    type:'',
                    age:'',
                    gender:'',
                    startDate:'',
                    endDate:'',
                }
            ],
        });
    }
    handleProgramChange = (index, key) => event => {
        let programs = [...this.state.programs];
        let program = {
            ...programs[index],
            [key]: event.target.value // e.g. latitude: 50 or longitude: 123
        };
        programs[index] = program;
        this.setState({
            programs: programs
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
            <h1>Camp Registration Page 4</h1>
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
          </form>
            </div>
        )
    }
}

CampRegistrationPage4.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(withStyles(styles)(CampRegistrationPage4));