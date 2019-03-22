import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import UserSharedWith from './UserSharedWith';
import SharedWithUser from './SharedWithUser';
import { ListItemSecondaryAction } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#127696',
        },
        secondary: {
            main: '#f44336',
        },
    },
    overrides: {
        MuiButton: { // Name of the component ⚛️ / style sheet
            text: { // Name of the rule
                color: 'white', // Some CSS
            },
        },
    },
});



function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3, color: 'rgb(57, 92, 104)'  }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        
    },
    search:{
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,

    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10, 
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },

    labelContainer: {
        color: 'rgb(155, 185, 204)',
    }
});



class Shared extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    // componentDidMount = () => {
    //     this.setSharedAccess();
    // }

    // setSharedAccess() {
    //     const action = { type: 'SET_SHARED_ACCESS' }
    //     this.props.dispatch(action);
    // }


    render() {

        const { classes } = this.props;
        const { value } = this.state;
        return (
            <NoSsr>
                
                <div className={classes.root}>
                    <AppBar  position="static">
                        <Tabs 
                        className="tabs"
                        variant="fullWidth" 
                        value={value} 
                        onChange={this.handleChange}>
                            <LinkTab label="Shared Itineraries" href="page1" />
                            <LinkTab label="Viewable Itineraries" href="page2" />
                            {/* <LinkTab label="Both" href="page3" /> */}
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer>

                        <UserSharedWith />
                          </TabContainer>}
                    {value === 1 && <TabContainer>
                      
                        <SharedWithUser />
                           
                    
                
                         
                    </TabContainer>}
              
                </div>
            </NoSsr>
        );
    }
}

Shared.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shared);