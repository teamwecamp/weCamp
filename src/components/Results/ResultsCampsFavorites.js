import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button'


class ResultsFavorites extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_USER_CHILD'})
    }

    //add children of user to favorites dropdown
    selectOptions = () => {
        let children = this.props.userChild;
        console.log(children);
        let kids = {}
        for(let child of children) {
            let kid = child.id
            kids[kid] = child.name
        }
        console.log(kids);
        return kids;
    }

    updateFavorite = () => {
        console.log(this.props.camp);
        if (this.props.user.id) {
            //if camp is already marked as favorite
            if (this.props.camp.sponsored) {
                console.log('true');
                swal({
                    //update once search route is complete
                    text: 'This is a favorite for <insert child>.',
                    buttons: {
                        edit: {
                            text: "Edit Favorites",
                            value: true,
                        },
                        cancel: "Close",
                    },
                }).then((moveFavorites) => {
                    if (moveFavorites) {
                        this.props.history.push('/favorites')
                    }
                })
            } else {
                //user needs to select a child to assign to favorite
                console.log(this.props.userChild)
                Swal.fire({
                    title: 'Add to Favorites?',
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
                    const type = 'ADD_FAVORITE_CAMP';
                    const payload = {child: assignTo.value, camp: this.props.camp.id};
                    this.props.dispatch({type: type, payload: payload})
                    }
                })
            }
        } else {
            //if user is not logged in
            swal({
                text: 'Please log in to mark favorites',
                buttons: {
                    login: {
                        text: "Login",
                        value: true,
                    },
                    cancel: "Cancel",
                },
            }).then((moveLogin) => {
                if (moveLogin) {
                    this.props.history.push('/favorites')
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Button className="eventButton" variant="outlined" onClick={this.updateFavorite} size="small">add to favorites</Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    user: reduxStore.user.userReducer,
    userChild: reduxStore.setFavoriteCamps.setUserChild
});


export default withRouter(connect(mapStateToProps)(ResultsFavorites));