import React, { Component } from 'react';
import { connect } from 'react-redux';
import LandingRecentCamps from './LandingRecentCamps';
import LandingSponsoredCamps from './LandingSponsoredCamps';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 2,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    bigButton: {
        height: 90,
        width: 1000,
        fontSize: 40,
        marginTop: 40,
        marginBottom: 20,
    },
});


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#127696',
        },
    },
});

class Landing extends Component {
    state = {
        spacing: '32',
    }


    componentDidMount = () => {
        this.setRecentCamps();
        this.setSponsoredCamps();
    }

    setRecentCamps = () => {
        const action = { type: 'FETCH_RECENT_CAMPS' };
        this.props.dispatch(action);
        console.log('action', action);
    }

    setSponsoredCamps = () => {
        const action = { type: 'FETCH_SPONSORED_CAMPS' };
        this.props.dispatch(action);
        console.log('action', action);

    }

    goToSearch = () => {
        this.props.history.push('/search')
    }

    sponsoredCamps = () => {
        return (
            this.props.sponCamps.map((camp, i) => {
                return (<LandingSponsoredCamps moveToCamp={this.moveToCamp} key={i} camp={camp} />)
            })
        )
    }

    recentCamps = () => {
        return (
            this.props.recentCamps.map((camp, i) => {
                return (<LandingRecentCamps moveToCamp={this.moveToCamp} key={i} camp={camp} />)
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
                {/* <h1 className="wecamp">WeCAMP</h1> */}
                <h2 className="slogan">Making summer simple for parents. Fun for kids.</h2>
                <h5 className="campsGroup">Sponsored Camps</h5>
                <MuiThemeProvider theme={theme}>
                    <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
                        {this.sponsoredCamps()}
                    </Grid>
                    <Grid container className={classes.root} justify="center" >
                        <Button className={classes.bigButton} variant="contained" color="primary" size="large" onClick={this.goToSearch}>
                            Search for Camps
                        </Button>
                    </Grid>
                    <h5 className="campsGroup">Newly Added WeCAMPS</h5>
                    <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
                        {this.recentCamps()}
                    </Grid>
                </MuiThemeProvider>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ({
    sponCamps: reduxStore.Landing.setSponsoredCamps,
    recentCamps: reduxStore.Landing.setRecentCamps
});

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapReduxStoreToProps)(Landing));


