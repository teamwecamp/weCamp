import React, { Component } from 'react';
import { connect } from 'react-redux';

//material-UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#e5e3f4' }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
});

const styles = theme => ({
    media: {
        height: 140,
    },
    card: {
        minWidth: 175,
        height: 310,
    },
    paper: {
        width: 260,
        textAlign: 'center',
        margin: theme.spacing.unit * 2,
    },
    title: {
        fontSize: 18,
    },
    CardActions: {
        justifyContent: 'center',
    },
    camp: {
        fontSize: 16,
    }
});

class FavoriteCampsDetails extends Component {

    moveToCamp = () => {
        const camp = this.props.camp.camp.id;
        console.log(camp);
        this.props.moveToCamp(`/viewCamp/${camp}`);
    }

    removeFavorite = () => {
        console.log(this.props.camp.faveId);
        this.props.dispatch({ type: 'REMOVE_FAVORITE_CAMP', payload: this.props.camp.faveId})
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid className="innerGrid" item xs={12}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <MuiThemeProvider theme={theme}>
                                <CardContent>
                                    <Typography className={classes.title}>{this.props.camp.kid}</Typography>
                                    <CardMedia
                                        className={classes.media}
                                        image={this.props.camp.camp.photo_url}
                                        title="Camp Pic"
                                    />
                                    <Typography className={classes.camp}>{this.props.camp.camp.name}</Typography>
                                    <CardActions className={classes.CardActions}>
                                        <Button className="eventButton" variant="outlined" onClick={this.removeFavorite} size="small">Remove From Favorites</Button>
                                        <Button className="eventButton" variant="outlined" onClick={this.moveToCamp} size="small">camp page</Button>
                                    </CardActions>
                                </CardContent>
                            </MuiThemeProvider>
                        </Card>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

FavoriteCampsDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(FavoriteCampsDetails));