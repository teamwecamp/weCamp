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
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import TextField from "@material-ui/core/TextField";


// this is materia UI table
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

// this is selects material UI

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


// this is where the component starts
class ViewCampProgram extends Component {

// this is for selects material UI
    state = {
        age: '',
    };


    componentDidMount(){
        this.getCampProgram();
        this.getItinerary();
        this.getStatus();
    }
    
   
    
    // get camp program from reducer
    getCampProgram = () => {
        console.log('this is inside getCampProgram');
        const campId = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_PROGRAMS', payload: campId });
    }

    getItinerary = () => {
        console.log('this gets the itinerary');
        const action = { type: 'FETCH_CAMP_ITINERARY' }
        this.props.dispatch(action);
    }

    getStatus = () => {
        console.log('this is gets status');
        const id = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_STATUS'});
    }

    

    
       

    render(){

        console.log('this is camp program', this.props.campProgram );
        console.log('this is itinerary', this.props.itinerary)
        console.log('this is status', this.props.status)
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
                            <CustomTableCell>You must be sign in to add to  Itinerary</CustomTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {JSON.stringify(this.props.campProgram)} */}
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

                {/* this is materai UI selects */}

                <form className={classes.root} autoComplete="off">

                
                
                {/* this is for selecting kids */}
                    <FormControl className={classes.margin}>

                        {/* {JSON.stringify(this.props.itinerary.children)} */}
                        
                        <TextField
                            id="outlined-type"
                            select
                            label="Select a Kid"
                            className={classes.textField}
                            value={this.state.type}
                            // onChange={this.handleSearchChange("type")}
                            variant="outlined"
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu
                                }
                            }}
                            style={{ width: 175 }}
                            margin="normal"
                        >
                            {this.props.itinerary.children !== undefined &&
                                this.props.itinerary.children.map(kids => (
                                <MenuItem key={kids.id} value={kids.id}>
                                    {kids.title}
                                </MenuItem>
                                ))}
                        </TextField>
                    </FormControl>
                     

                 
                 
                 {/* this is for selecting the program */}
                    <FormControl className={classes.margin}>

                        {/* {JSON.stringify(this.props.campProgram)} */}
                        <TextField
                            id="outlined-type"
                            select
                            label="Select a Program"
                            className={classes.textField}
                            value={this.state.type}
                            // onChange={this.handleSearchChange("type")}
                            variant="outlined"
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu
                                }
                            }}
                            style={{ width: 175 }}
                            margin="normal"
                        >
                            {this.props.campProgram !== undefined &&      this.props.campProgram.map(programs => (
                                    <MenuItem key={programs.id} value={programs.id}>
                                        {programs.title}
                                    </MenuItem>
                                ))}
                        </TextField>


                    </FormControl>
           
                  
                  
                  
                  {/* this is for slecting the status */}
                    <FormControl className={classes.margin}>

                        {/* {JSON.stringify(this.props.status)} */}
                        <TextField
                            id="outlined-type"
                            select
                            label="Select a Status"
                            className={classes.textField}
                            value={this.state.type}
                            // onChange={this.handleSearchChange("type")}
                            variant="outlined"
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu
                                }
                            }}
                            style={{ width: 175 }}
                            margin="normal"
                        >statusstatusstastatus
                            {this.props.status !== undefined && 
                            this.props.status.map(stas => (
                                <MenuItem key={stas.id} value={stas.id}>
                                    {stas.status}
                                </MenuItem>
                            ))}
                        </TextField>

                    </FormControl>
                </form>

             

                
            </Paper>
            
           
           
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    campProgram: reduxStore.setViewCampsDetails.setViewCampsPrograms,
    itinerary: reduxStore.setCampItinerary.setCampItinerary,
    status: reduxStore.setViewCampsDetails.setStatus
});

ViewCampProgram.propTypes = {
    classes: PropTypes.object.isRequired,
   
};


export default withStyles(styles) (connect(mapReduxStoreToProps) (ViewCampProgram));



