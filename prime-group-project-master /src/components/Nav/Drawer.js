import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import './Nav.css';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';



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
                    <Link component={RouterLink} to="/about">
                        <ListItem button>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText inset primary='About' />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/userprofileinfo/user">
                        <ListItem>
                            <ListItemIcon><PeopleIcon /></ListItemIcon>
                            <ListItemText primary={'User Profile'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/favorites">
                        <ListItem>
                            <ListItemIcon><FavoriteIcon /></ListItemIcon>
                            <ListItemText primary={'Favorite'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/search">
                        <ListItem>
                            <ListItemIcon><SearchIcon /></ListItemIcon>
                            <ListItemText primary={'Search'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/itinerary">
                        <ListItem>
                            <ListItemIcon><DescriptionIcon /></ListItemIcon>
                            <ListItemText primary={'Itinerary'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/shared">
                        <ListItem>
                            <ListItemIcon><PeopleIcon /></ListItemIcon>
                            <ListItemText primary={'Friends'} />
                        </ListItem>
                    </Link>
                    <Link component={RouterLink} to="/campregistration">
                        <ListItem>
                            <ListItemIcon><PeopleIcon /></ListItemIcon>
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