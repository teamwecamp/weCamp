import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Drawer from './Drawer';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
// import { unstable_Box as Box } from '@material-ui/core/Box';

// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     Link: {
//         textAlign: 'right',

//     }
    
// });

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 0,
        marginRight: 20,
    },
};


const NavBar = (props) => {
    return (
        <div >
            <Grid container spacing={12}>
            <AppBar position="static">
                <Toolbar className="nav">
                    <Drawer />
                    <Grid item xs={9}>
                    <Link to="/landing">
                        <h2 className="nav-title">WeCAMP</h2>
                        {/* <NavBar/> */}
                    </Link>
                        </Grid>
                        {/* Always show this link since the about page is not protected */}
                        <Grid item xs={1}>
                            <Link className="nav-link" to="/about">
                                About
      </Link>
                        </Grid>
                    {/* <div className="nav-right"> */}
                    <Grid item xs={1}>
                        <Link className="nav-link" to="/login">
                            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        
                            {props.user.id ? 'Home' : 'Login / Register'}
                            
                        </Link>
                            </Grid>
                        {/* Show the link to the info page and the logout button if the user is logged in */}
                       
                        {props.user.id && (
                            <>
                                <Grid item xs={1}>
                                <Link className="nav-link" to="/info">
                                        <LogOutButton className="nav-title" />
          </Link>
                                </Grid>
                                
                            </>
                        )}
          
                    {/* </div> */}

                </Toolbar>
            </AppBar>
            </Grid>
        </div>

    );
}

const mapStateToProps = state => ({
    user: state.user.userReducer
});

export default withStyles(styles)(connect(mapStateToProps)(NavBar));