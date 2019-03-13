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

    render() {
        return (
            <div>
            <h1>Camp Registration Page 3</h1>
            </div>
        )
    }
}

CampRegistrationPage3.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(withStyles(styles)(CampRegistrationPage3));