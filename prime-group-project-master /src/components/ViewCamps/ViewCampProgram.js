import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// this here is Material UI 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

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
        width: '75%',
        marginTop: theme.spacing.unit * 2,
        overflowX: 'auto',
        marginBottom: '15px',
        marginLeft: '125px',
    },
    table: {
        minWidth: 500,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        icon: {
            margin: theme.spacing.unit,
            fontSize: 32,
        },
    },
});


class ViewCampProgram extends Component {

    componentDidMount(){
        this.getCampProgram();
    }

    getCampProgram = () => {
        console.log('this is inside getCampProgram');
        const campId = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_PROGRAMS', payload: campId });
    }

    render(){

        console.log('this is camp program', this.props.campProgram );
        const { classes } = this.props;
        return(
          
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Program</CustomTableCell>
                            <CustomTableCell>Start Date</CustomTableCell>
                            <CustomTableCell>End Date</CustomTableCell>
                            <CustomTableCell>Start Time</CustomTableCell>
                            <CustomTableCell>End Time</CustomTableCell>
                            <CustomTableCell>Type</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {moment(this.props.member.date_of_birth).format("MMMM D YYYY")} */}
                      
                        {this.props.campProgram !== undefined && this.props.campProgram.map(schedule => (
                            <TableRow key={schedule.id}>
                                <TableCell component="th" scope="row">
                                    {schedule.title}
                                </TableCell>
                                <TableCell >{moment(schedule.start_date).format("MMMM D YYYY")}</TableCell>
                                <TableCell >{moment(schedule.end_date).format("MMMM D YYYY")}</TableCell>
                                <TableCell >{schedule.start_time}</TableCell>
                                <TableCell >{schedule.end_time}</TableCell>
                                <TableCell >{schedule.type}</TableCell>

                                <TableCell><DeleteOutlined className={classes.icon} /></TableCell>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>
            </Paper>
           
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    campProgram: reduxStore.setViewCampsDetails.setViewCampsPrograms
});

ViewCampProgram.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (connect(mapReduxStoreToProps) (ViewCampProgram));



