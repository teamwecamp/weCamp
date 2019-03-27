import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import './Nav.css';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import FaceIcon from '@material-ui/icons/Face';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';



const styles = theme => ({
    list: {
        width: 'auto',
    },
    fullList: {
        width: 'auto',
    }
});

class NavBar extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };


    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <Link component={RouterLink} to="/landing">
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText inset primary='Home' />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/userprofileinfo/user">
                        <ListItem>
                            <ListItemIcon><FaceIcon /></ListItemIcon>
                            <ListItemText primary={'User Profile'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/search">
                        <ListItem>
                            <ListItemIcon><SearchIcon /></ListItemIcon>
                            <ListItemText primary={'Search'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/favorites">
                        <ListItem>
                            <ListItemIcon><FavoriteIcon /></ListItemIcon>
                            <ListItemText primary={'Favorite'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/itinerary">
                        <ListItem>
                            <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                            <ListItemText primary={'Itinerary'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/shared">
                        <ListItem>
                            <ListItemIcon><PeopleIcon /></ListItemIcon>
                            <ListItemText primary={'Network'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/campregistration">
                        <ListItem>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary={'Camp Administrators'} />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );
        return (
            <div>
                <Button onClick={this.toggleDrawer('left', true)}><MenuIcon className=".nav" /></Button>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(NavBar));