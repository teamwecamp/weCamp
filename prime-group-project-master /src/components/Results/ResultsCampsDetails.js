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
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#e5e3f4' }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
});

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 340,
    },
    card: {
        width: 700,
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
    control: {
        padding: theme.spacing.unit * 2,
    },
    paper: {
        textAlign: 'center',
    },
    pos: {
        marginBottom: 4,
        fontSize: 16,
    },
    title: {
        fontSize: 18,
    },
    CardActions: {
        justifyContent: 'center',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});


class ResultsDetails extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid className="innerGrid" item xs={12}>
                    <Paper className={classes.paper}>


                        <Card className={classes.card}>
                            <MuiThemeProvider theme={theme}>
                                <CardHeader
                                    action={
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={this.props.camp.Name}
                                    subheader={this.props.camp.region_id}
                                />
                                <CardContent>
                                    {/* <Typography className={classes.title}></Typography>
                                    <Typography>{this.props.camp.region}</Typography> */}
                                    <CardMedia
                                        className={classes.media}
                                        image={this.props.camp.photo_url}
                                        title="Camp Pic"
                                    />
                                    <CardActions className={classes.actions} disableActionSpacing>
                                        <IconButton aria-label="Add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <Button className="eventButton" onClick={this.moveToCamp} size="small">camp page</Button>
                                        {/* <IconButton aria-label="Share">
                                            <ShareIcon />
                                        </IconButton> */}
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
                                        <CardContent>
                                            <Typography paragraph>
                                                {this.props.camp.summary}
                                            </Typography>
                                            <Typography>
                                                Cost: ${this.props.camp.cost_min} - ${this.props.camp.cost_max}
                                            </Typography>
                                            <Typography>
                                                Type: TBD
                                            </Typography>
                                            <Typography>
                                                Dates: TBD
                                            </Typography>
                                            <Typography>
                                                Gender: {this.props.camp.gender_id}
                                            </Typography>
                                            <Typography>
                                                Activites: TBD
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
    results: reduxStore.setSearchCamps.setSearchCamps
});

ResultsDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(ResultsDetails));