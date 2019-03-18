import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


class ResultsFavorites extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    updateFavorite = () => {
        console.log(this.props.camp);
        if (this.props.user.id) {
            console.log('true');
            swal({
                text: 'This is a favorite for <insert child>.',
                buttons: {
                    edit: {
                        text: "Edit",
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
                <IconButton aria-label="Add to favorites"
                    onClick={this.updateFavorite}>
                    <FavoriteIcon />
                </IconButton>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    user: reduxStore.user.userReducer
});


export default withRouter(connect(mapStateToProps)(ResultsFavorites));