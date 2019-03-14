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


class CampRegistrationPage3 extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const activity = target.name;

        this.setState({
            [activity]: value
        })
    }
    
    componentDidMount = () => {
        //insert action to get drop down info here.
        this.getDropDowns();
    }
    getDropDowns = () => {
        const action = {type: 'FETCH_SEARCH_CAMPS_DROP_DOWN'};
        this.props.dispatch(action);
    }

    setOptions = (event) => {
        event.preventDefault();
        const trueState = [];
        for (let key in this.state){
            if (this.state[key] === true){
                trueState.push(key);
            }
        }
        console.log(trueState);
        this.props.history.push('//campregistrationpage4')
    }

    render() {
        return (
            <div>
            <h1>Camp Registration Page 3</h1>
            <h2>Select Activities Provided by your camp</h2>
            <form onSubmit={this.setOptions}>
                    {this.mapInfo()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

CampRegistrationPage3.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    dropDown: reduxStore.setSearchCamps.setCampDropDown
});

export default connect(mapStateToProps)(withStyles(styles)(CampRegistrationPage3));