import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// this here is Material UI 
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 10,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: theme.spacing.unit * 2,
        overflowX: 'auto',
        marginBottom: '10px',
        marginLeft: '100px',
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
            fontSize: 10,
        },
    },
});


class ViewCampProgram extends Component {

    componentDidMount(){
        this.getCampProgram();
    }

    state = {
        age: '',
        open: false,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    getCampProgram = () => {
        console.log('this is inside getCampProgram');
        const campId = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_PROGRAMS', payload: campId });
    }

    

    
       

    render(){

        console.log('this is camp program', this.props.campProgram );
        const { classes } = this.props;
        // const { classes } = this.props;
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
                            <CustomTableCell></CustomTableCell>

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

                                <TableCell><Button variant="contained" color="primary" className={classes.button}>Add To Itinerary</Button></TableCell>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                </Table>

              {/* this is the form for selecting kids, program, and status */}
                <form autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-controlled-open-select">Add Itinerary To</InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'demo-controlled-open-select',
                            }}
                        >
                            <MenuItem value="">
                                <em>Itinerary</em>
                            </MenuItem>
                            <MenuItem value={10}>Kids</MenuItem>
                            <MenuItem value={20}>Program</MenuItem>
                            <MenuItem value={30}>Status</MenuItem>
                        </Select>
                    </FormControl>
                        
                </form>

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



