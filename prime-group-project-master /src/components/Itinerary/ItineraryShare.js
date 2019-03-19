import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

class ItineraryShare extends Component {
    shareItinerary = () => {
        console.log(this.props.children);

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
        }).then((assignTo) => {
            console.log(assignTo);
            if (assignTo.value) {
                const type = 'ADD_SHARE';
                const payload = { child: assignTo.value, camp: this.props.camp.id };
                this.props.dispatch({ type: type, payload: payload })
            }
        })

    }

    selectOptions = () => {
        let children = this.props.children;
        console.log(children);
        let kids = {}
        for (let child of children) {
            let kid = child.id
            kids[kid] = child.title
        }
        console.log(kids);
        return kids;
    }

    render() {
        return (
            <Button variant="contained" color="primary" size="large" onClick={this.shareItinerary}>
                Share Itinerary
                </Button>
        )
    }
}

export default connect()(ItineraryShare);