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
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';

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
    },
});


class SharedWithUser extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }


    componentDidMount = () => {
        this.fetchSharedWithUser();
    }

    fetchSharedWithUser() {
        const action = { type: 'FETCH_SHARED_WITH_USER' }
        this.props.dispatch(action);
        console.log('shared', action);

    }


    handleChange = (event, value) => {
        this.setState({ value });
    };


    removeFromNetwork = (event) => {
        console.log('inremove', event.target.value);
        const action = { type: 'DELETE_SHARED_ACCESS', payload: event.target.value }
        this.props.dispatch(action);
        this.fetchSharedWithUser();


    }

    moveToItinerary = (event) => {
        const childId = event.target.value
        console.log('event.target.value', childId);
        this.props.history.push(`sharedItinerary/${childId}`)
        console.log('move to itinerary', this.props.history.push(`/sharedItinerary/${childId}`));
        
        
    }

    render() {

        const { classes } = this.props;

        return (
            
            <Paper className={classes.root}>
                {JSON.stringify(this.props.sharedAccess.user_child_id)}
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Guardian(s)</CustomTableCell>
                            <CustomTableCell align="right">Child's Itinerary</CustomTableCell>
                            <CustomTableCell align="right">View Itinerary</CustomTableCell>
                            <CustomTableCell align="right">Remove From Network</CustomTableCell>
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
                                        className="eventButton"
                                        variant="contained"
                                        onClick={this.moveToItinerary}
                                        size="small"
                                        value={row.user_child_id}>
                                        View Itinerary
                                </Button>
                                </CustomTableCell>
                                <CustomTableCell align="right">
                                    <Button
                                        className="eventButton"
                                        variant=""
                                        size="small"
                                        value={row.id}
                                        onClick={this.removeFromNetwork}>
                                        Remove From Network
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
SharedWithUser.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(connect(mapStateToProps)(SharedWithUser)));