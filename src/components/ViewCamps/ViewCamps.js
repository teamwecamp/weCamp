import React, { Component } from 'react';
import { connect } from 'react-redux';
import './viewCamps.css';
import ViewCampsContact from './ViewCampsContact';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#127696',
        },
    },
});

class ViewCamps extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount = () => {
        this.setViewCamps();
        this.props.dispatch({ type: 'FETCH_FAVORITE_CAMPS' });
        this.props.dispatch({ type: 'FETCH_USER_CHILD' });
    }

    //add children of user to favorites dropdown
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

    setViewCamps = () => {
        const camp = this.props.match.params.id
        this.props.dispatch({ type: 'FETCH_CAMP_DETAILS', payload: camp });
    }

    goToProgram = () => {
        this.props.history.push(`/viewProgram/${this.props.match.params.id}`)
    }

    updateFavorite = () => {
        console.log(this.props.viewCamp);
        if (this.props.user.id) {
            //if camp is already marked as favorite
            if (this.props.viewCamp.favorite) {
                console.log('true');
                Swal.fire({
                    //update once search route is complete
                    text: 'This is already in your favorites.',
                    buttons: {
                        edit: {
                            text: "Go to Favorites",
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
                        const payload = { child: assignTo.value, camp: this.props.viewCamp.id };
                        this.props.dispatch({ type: type, payload: payload });
                        Swal.fire('Added to favorites');
                    }
                })
            }
        } else {
            //if user is not logged in
            Swal.fire({
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
        let camp = this.props.viewCamp;
        return (
            <div className="viewCamps">
                <h1 className="campName">{camp.name}</h1>
                {/* add logo */}
                <img className="camp_pic" alt="camp pic" src={this.props.viewCamp.photo_url} />
                <p className="summary">{camp.summary}</p>
                <ViewCampsContact camp={camp} />
                <br />
                <MuiThemeProvider them={theme}>
                    <Button className="faveButton" variant="contained" color="primary" size="large" onClick={this.updateFavorite}>
                        Add to Favorites
                    </Button>
                    <Button className="viewButton" variant="contained" color="primary" size="large" onClick={this.goToProgram}>
                        View Program Details
                    </Button>
                </MuiThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    viewCamp: reduxStore.setViewCampsDetails.setViewCampsDetails,
    user: reduxStore.user.userReducer,
    userChild: reduxStore.setFavoriteCamps.setUserChild,
});

export default withRouter(connect(mapStateToProps)(ViewCamps));