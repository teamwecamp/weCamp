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
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
// import { unstable_Box as Box } from '@material-ui/core/Box';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    Link: {
        textAlign: 'right',
    
    },
});

 

const NavBar = (props) => {
    

    // if (user.id) {
    //     // if the user is logged in (only logged in users have ids)
    //     // show the component that is protected
    //     <Link className="nav-link" to="/landing">
    //         <LogOutButton className="nav-link" />
    //     </Link>
    // } else if (loginMode === 'login') {
    //     // if they are not logged in, check the loginMode on Redux State
    //     // if the mode is 'login', show the LoginPage
    //     <Link className="nav-link" to="/login">
    //         Login
    //     </Link>
    // } else {
    //     // the the user is not logged in and the mode is not 'login'
    //     // show the RegisterPage
    //     <Link className="nav-link" to="/register">
    //         Register
    //     </Link>
    // }

    return (
        <div >
            <AppBar position="static">
                <Toolbar className="nav">
                    <Drawer />
                    <Link to="/landing">
                        <h2 className="nav-title">WeCAMP</h2>
                        {/* <NavBar/> */}
                    </Link>
                    <div className="nav-right">
                        <Link className="nav-link" to="/landing">
                            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
                            {props.user.id ? 'Home' : 'Login / Register'}
                        </Link>
                        {/* Show the link to the info page and the logout button if the user is logged in */}
                        {props.user.id && (
                            <>
                                <Link className="nav-link" to="/info">
                                    Info Page
          </Link>
                                <LogOutButton className="nav-link" />
                            </>
                        )}
                        {/* Always show this link since the about page is not protected */}
                        <Link className="nav-link" to="/about">
                            About
      </Link>
                    </div>
 
                </Toolbar>
            </AppBar>
        </div>

    );
}

const mapStateToProps = state => ({
    user: state.user,
});

export default withStyles(styles)(connect(mapStateToProps)(NavBar));