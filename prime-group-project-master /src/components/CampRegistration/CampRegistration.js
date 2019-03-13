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
    componentDidMount ()  {
        //insert action to get drop down info here.
        console.log('consolelog component did mount');
        this.getDropDowns();
       

    }

    getDropDowns = () => {
        const action = {type: 'FETCH_SEARCH_CAMPS_DROP_DOWN'};
        this.props.dispatch(action);
        console.log('GET DROP DOWNS',action);
        

    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
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
                //required
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
                style = {{width: 200}}
                margin="normal"
              >
                {this.props.dropDown.states !== undefined && this.props.dropDown.states.map(type => (
                  <MenuItem key={type.id} value={type.id}>
                  {type.state}
                  </MenuItem>
                ))}
              </TextField>
{/* The above code will be run only when states is not undefined. */}
            </form>
            </div>
        )
    }
}

CampRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    dropDown:reduxStore.setSearchCamps.setCampDropDown
});

export default connect(mapStateToProps)(withStyles(styles)(CampRegistration));