import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        button: {
            margin: theme.spacing.unit,
        },
    },
});



class UserSharedWith extends Component {

    state = {
        reload:''
    }

      componentDidMount = () => {
        this.setSharedWithUser();
    }

    setSharedWithUser() {
        const action = { type: 'SET_USER_SHARED_WITH' }
        this.props.dispatch(action);
        console.log('shared', action);
        
    }



    handleChange = (event, value) => {
        this.setState({ value });
    };

    removeAccess = (event) => {
        console.log('inremove', event.target.value);
        const action = { type: 'DELETE_SHARED_ACCESS', payload: event.target.value }
        this.props.dispatch(action);
        console.log('action', action);
        this.setSharedWithUser();
       
       
    } 


    render() {

        const { classes } = this.props;
      
        return (

            <Paper className={classes.root}>
            {JSON.stringify(this.props.sharedaccess)}
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Our Child</CustomTableCell>
                            <CustomTableCell align="right">Guardian(s) Shared With</CustomTableCell>
                            <CustomTableCell align="right">Remove Access</CustomTableCell>
                          
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.sharedAccess.map(row => (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell component="th" scope="row">
                                    {row.name}
                                </CustomTableCell>
                                <CustomTableCell align="right">{row.full_name}</CustomTableCell>
                                <CustomTableCell align="right">
                                <Button 
                                variant="contained"
                                className = {classes.button}
                                color="primary"
                                size="small"
                                value={row.id}
                                onClick={this.removeAccess}>
                                        Remove Access
                                </Button>
                                </CustomTableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    sharedAccess: reduxStore.setSharedAccess.setSharedAccess
});

    UserSharedWith.propTypes = {
        classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(connect(mapStateToProps)(UserSharedWith));