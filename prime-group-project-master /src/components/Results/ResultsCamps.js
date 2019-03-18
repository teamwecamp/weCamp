import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsDetails from './ResultsCampsDetails';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    pos: {
        marginBottom: 12,
    },
    bigButton: {
        height: 90,
        width: 1000,
        fontSize: 40,
    },
});


class ResultsCamps extends Component {
    state = {
        spacing: '16',
    }

    resultsDetails = () => {
        return (
            this.props.results.map((camp, i) => {
                return (<ResultsDetails moveToCamp={this.moveToCamp} key={i} camp={camp} />)
            })
        )
    }

    moveToCamp = (page) => {
        this.props.history.push(page);
    }


    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        return (
            <div>
                <h1>Results</h1>
                {JSON.stringify(this.props.devResults)}
                
                <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
                    {this.resultsDetails()}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    results: reduxStore.setSearchCamps.setSearchCamps,
    devResults: reduxStore.setFavoriteCamps.setResultsForDev
});

ResultsCamps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(ResultsCamps));