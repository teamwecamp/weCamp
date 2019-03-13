import React, { Component } from 'react';
import { connect } from 'react-redux';
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
});

class FavoriteCamps extends Component {

    componentDidMount(){
        // this.setFavoriteCamps();
    }

    setFavoriteCamps = () => {
        const action = { type: 'SET_FAVORITE_CAMPS'}
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
                    return (<FavoriteCampItems moveToCamp={this.moveToCamp} key={i} camp={camp} />)
                })
            )
        }
    }

    moveToCamp = (page) => {
        this.props.history.push(page);
    }

    render() {
        return (
            <div>
                <h1>Favorite Camps</h1>
                {/* {JSON.stringify(this.props.reduxStore.setFavoriteCamps)} */}
                <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
                    {this.favoriteCamps()}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    favoriteCamps: reduxStore.setFavoriteCamps
});

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(FavoriteCamps));
