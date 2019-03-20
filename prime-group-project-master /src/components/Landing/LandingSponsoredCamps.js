import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        height: 280,
    },
    paper: {
        height: 200,
        width: 260,
        textAlign: 'center',
        margin: theme.spacing.unit * 2,
    },
    title: {
        fontSize: 18,
    },
    CardActions: {
        justifyContent: 'center',
    }
});


class LandingSponsoredCamps extends Component {
    moveToCamp = () => {
        const camp = this.props.camp.id;
        console.log(camp);
        this.props.moveToCamp(`/viewCamp/${camp}`);
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
                                    <Typography className={classes.title}>{this.props.camp.Name}</Typography>
                                    <Typography>{this.props.camp.region}</Typography>
                                    <CardMedia
                                        className={classes.media}
                                        image={this.props.camp.photo_url}
                                        title="Camp Pic"
                                    />
                                    <CardActions className={classes.CardActions}>
                                        <Button className="eventButton" onClick={this.moveToCamp} size="small">camp page</Button>
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

LandingSponsoredCamps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(LandingSponsoredCamps));