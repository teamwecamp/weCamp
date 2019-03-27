import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import Results from '../Results/ResultsCamps';

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        margin: "dense",
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
        marginTop: 16
    },
    menu: {
        width: 400
    },
    button: {

    }
});

const religion = ["preferred", "not preferred"];
const accessibility = ["preferred", "not preferred"];

class SearchCamps extends Component {

    state = {
        minAge: 0,
        maxAge: 99,
        gender: 3,
        religion: "no",
        type: "overnight",
        activityCategory: 0,
        activityType: 0,
        startDate: '2019-05-01',
        endDate: '2019-08-31',
        minCost: 0,
        maxCost: 10000,
        accessibility: "no",
        state: "Minnesota",
        region: "Northern MN",
    };


    componentDidMount = () => {
        this.setSearchCamps();
        this.getDropDowns();
    }

    moveToCamp = (page) => {
        console.log(page);

        this.props.history.push(page);
    }

    setSearchCamps = (searchObject) => {
        let action;
        if (searchObject) {
            action = {
                type: 'FETCH_SEARCH_CAMPS', payload: searchObject
            }
        } else {
            action = { type: 'FETCH_SEARCH_CAMPS', payload: this.state }
        }
        this.props.dispatch(action);
        console.log('action', action);
    }

    handleSearchChange = propertyName => event => {
        this.setState({
            [propertyName]: event.target.value
        })
        let searchObject = { ...this.state, [propertyName]: event.target.value };
        console.log('event.target.value', event.target.value);
        setTimeout(() => this.setSearchCamps(searchObject), 500);

    };

    getDropDowns = () => {
        const action = { type: "FETCH_SEARCH_CAMPS_DROP_DOWN" };
        this.props.dispatch(action);
        console.log("GET DROP DOWNS", action);
    };

    render() {
        console.log(this.props.dropDown);
        const { classes } = this.props;
        return (
            <div>
                <h1>Search Camps</h1>
                <form
                    id="input-form"
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                    onSubmit={this.getResults}
                >
                    <TextField
                        id="outlined-number"
                        label="Minimum Age"
                        value={this.state.minAge}
                        onChange={this.handleSearchChange('minAge')}
                        type="number"
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                        style={{ width: 175, padding: 0 }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Maxium Age"
                        value={this.state.maxAge}
                        onChange={this.handleSearchChange('maxAge')}
                        type="number"
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                        style={{ width: 100, padding: 0 }}
                    />
                    <TextField
                        id="outlined-type"
                        select
                        label="Gender"
                        className={classes.textField}
                        value={this.state.gender}
                        onChange={this.handleSearchChange("gender")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 90 }}
                        margin="dense"
                    >
                        {this.props.dropDown.gender !== undefined &&
                            this.props.dropDown.gender.map(type => (
                                <MenuItem key={type.id} value={type.id}>
                                    {type.gender}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        id="outlined-type"
                        select
                        label="Religious Emphasis"
                        className={classes.textField}
                        value={this.state.religion}
                        onChange={this.handleSearchChange("religion")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 140 }}
                        margin="dense"
                    >
                        {religion.map(type => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-type"
                        select
                        label="Camp Type"
                        className={classes.textField}
                        value={this.state.type}
                        onChange={this.handleSearchChange("type")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 175 }}
                        margin="dense"
                        style={{ width: 120, padding: 0 }}
                    >
                        {this.props.dropDown.campType !== undefined &&
                            this.props.dropDown.campType.map(type => (
                                <MenuItem key={type.id} value={type.id}>
                                    {type.type}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        id="outlined-type"
                        select
                        label="State"
                        className={classes.textField}
                        value={this.state.state}
                        onChange={this.handleSearchChange("state")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 200 }}
                        margin="dense"
                    >
                        {this.props.dropDown.states !== undefined &&
                            this.props.dropDown.states.map(type => (
                                <MenuItem key={type.id} value={type.id}>
                                    {type.state}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        id="outlined-type"
                        select
                        label="Region"
                        className={classes.textField}
                        value={this.state.region}
                        onChange={this.handleSearchChange("region")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 141, padding: 0 }}
                        margin="dense"
                    >
                        {this.props.dropDown.regions !== undefined &&
                            this.props.dropDown.regions.map(type => (
                                <MenuItem key={type.id} value={type.id}>
                                    {type.region}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        id="outlined-type"
                        select
                        label="Primary Focus"
                        className={classes.textField}
                        value={this.state.activityCategory}
                        onChange={this.handleSearchChange("activityCategory")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 178, padding: 0 }}
                        margin="dense"
                    >
                        <MenuItem key={0} value={0}>
                            All
                                </MenuItem>
                        {this.props.dropDown.activityCategory !== undefined &&
                            this.props.dropDown.activityCategory.map(type => (
                                <MenuItem key={type.id} value={type.id}>
                                    {type.category}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        id="outlined-type"
                        select
                        label="Favorite Activity"
                        className={classes.textField}
                        value={this.state.activityType}
                        onChange={this.handleSearchChange("activityType")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 170, padding: 0 }}
                        margin="dense"
                    >
                        {this.props.dropDown.activities !== undefined &&
                            this.props.dropDown.activities.map(type => (
                                <MenuItem key={type.id} value={type.id}>
                                    {type.activity}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        id="outlined-startdate"
                        label="Start Date"
                        type="date"
                        className={classes.textField}
                        value={this.state.startDate}
                        onChange={this.handleSearchChange("startDate")}
                        margin="dense"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                        style={{ width: 179, padding: 0 }}
                    />
                    <TextField
                        id="outlined-enddate"
                        label="End Date"
                        type="date"
                        className={classes.textField}
                        value={this.state.endDate}
                        onChange={this.handleSearchChange("endDate")}
                        margin="dense"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                        style={{ width: 179, padding: 0 }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Minimum Cost"
                        value={this.state.minCost}
                        onChange={this.handleSearchChange('minCost')}
                        type="number"
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        style={{ width: 110, padding: 0 }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Maxium Cost"
                        value={this.state.maxCost}
                        onChange={this.handleSearchChange('maxCost')}
                        type="number"
                        className={classes.textField}
                        margin="dense"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        style={{ width: 110, padding: 0 }}
                    />
                    <TextField
                        id="outlined-type"
                        select
                        label="Accessibility Accommodations"
                        className={classes.textField}
                        value={this.state.accessibility}
                        onChange={this.handleSearchChange("accessibility")}
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        style={{ width: 145 }}
                        margin="dense"
                    >
                        {accessibility.map(type => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </TextField>
                </form>
                <div>
                    <Results moveToCamp={this.moveToCamp} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    dropDown: reduxStore.setSearchCamps.setCampDropDown
});

SearchCamps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(SearchCamps));
