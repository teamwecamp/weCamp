import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#127696',
        },
    },
});


class ItineraryShare extends Component {
    shareItinerary = () => {
        console.log(this.props.userChild);

        Swal.fire({
            title: 'Choose whose itinerary you want to share.',
            input: 'select',
            inputOptions: this.selectOptions(),
            inputPlaceholder: 'Select a child',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Please choose a child'
                }
            }
        }).then((selected) => {
            const child = selected.value;
            console.log(child);
            if (selected.value) {
                Swal.fire({
                    title: 'Enter the email of the user you want to share with.',
                    input: 'text',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'Please enter an email.'
                        }
                    },
                }).then((email) => {
                    console.log(email.value);
                    let sharedInfo = {}
                    sharedInfo.email = email.value;
                    sharedInfo.child_id = child;
                    this.props.dispatch({type: 'MATCH_USER', payload: sharedInfo});
                    Swal.fire({title: 'Network successfully updated.',
                            type: 'success'});
                }).catch((error) => {
                    Swal.fire('something went wrong');
                    console.log(error);
                })               
            }
        }).catch((error) => {
            Swal.fire('something went wrong');
            console.log(error);
        })
    }

    selectOptions = () => {
        let children = this.props.userChild;
        console.log(children);
        let kids = {}
        for (let child of children) {
            let kid = child.id
            kids[kid] = child.name
        }
        console.log(kids);
        return kids;
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary" size="large" onClick={this.shareItinerary}>
                Share Itinerary
                </Button>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    user: reduxStore.user.userReducer,
    userChild: reduxStore.setFavoriteCamps.setUserChild
});

export default connect(mapStateToProps)(ItineraryShare);