import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ResultsFavorites from './ResultsCampsFavorites';

//materialUI
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
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#e6e1c5' }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
});

const styles = theme => ({
    media: {
        height: 220,
    },
    card: {
        width: 400,
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    paper: {
        textAlign: 'center',
        margin: theme.spacing.unit * 2,
    },
    title: {
        fontSize: 18,
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    expandInfo: {
        fontSize: 16,
    },
    eventButton: {
        margin: 6,
    }
});


class ResultsDetails extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    moveToCamp = () => {
        const camp = this.props.camp.id;
        console.log(camp);
        this.props.moveToCamp(`/viewCamp/${camp}`);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid className="innerGrid" item xs={16}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <MuiThemeProvider theme={theme}>
                                <CardHeader    
                                    title={this.props.camp.name}
                                    subheader={this.props.camp.region}
                                />
                                <CardContent>
                                    <CardMedia
                                        className={classes.media}
                                        image={this.props.camp.photo_url}
                                        title="Camp Pic"
                                    />
                                    <CardActions className={classes.actions} disableActionSpacing>
                                        <ResultsFavorites camp={this.props.camp}/>
                                        <Button variant="outlined" className={classes.eventButton} onClick={this.moveToCamp} backgroundColor="primary" size="small">camp details</Button>
                                        <IconButton
                                            className={classnames(classes.expand, {
                                                [classes.expandOpen]: this.state.expanded,
                                            })}
                                            onClick={this.handleExpandClick}
                                            aria-expanded={this.state.expanded}
                                            aria-label="Show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                        <CardContent className={classes.expandInfo}>
                                            <Typography paragraph>
                                                {this.props.camp.summary}
                                            </Typography>
                                            <Typography>
                                                Cost: ${this.props.camp.cost_min} - ${this.props.camp.cost_max}
                                            </Typography>
                                            <Typography>
                                                Type: {this.props.camp.type}
                                            </Typography>
                                            <Typography>
                                                Dates: {moment(this.props.camp.date_min).format('MM/DD/YYYY')} - {moment(this.props.camp.date_max).format('MM/DD/YYYY')}
                                            </Typography>
                                            <Typography>
                                                Gender: {this.props.camp.gender}
                                            </Typography>
                                        </CardContent>
                                    </Collapse>
                                </CardContent>
                            </MuiThemeProvider>
                        </Card>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    results: reduxStore.setSearchCamps.setSearchCamps,
    user: reduxStore.user.userReducer
});

ResultsDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(ResultsDetails));