import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FavoriteCampsDetails from './FavoriteCampsDetails';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class FavoriteCamps extends Component {
    state = {
        spacing: '16',
    }

    componentDidMount(){
        this.setFavoriteCamps();
    }

    setFavoriteCamps = () => {
        const action = { type: 'FETCH_FAVORITE_CAMPS'}
        this.props.dispatch(action);
    }

    favoriteCamps = () => {
        if (this.props.favoriteCamps.length === 0) {
            return (
                <div>
                    <p>You have not selected any favorites.</p>
                </div>
            )
        } else {
            return (
                this.props.favoriteCamps.map((camp, i) => {
                    return (<FavoriteCampsDetails moveToCamp={this.moveToCamp} key={i} camp={camp} />)
                })
            )
        }
    }

    moveToCamp = (page) => {
        this.props.history.push(page);
    }

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        return (
            <div>
                <h1>Favorite Camps</h1>             
                <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
                    {this.favoriteCamps()}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    favoriteCamps: reduxStore.setFavoriteCamps.setFavoriteCamps
});

FavoriteCamps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(FavoriteCamps));
