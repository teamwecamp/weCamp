import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';


class FavoriteCamps extends Component {

    componentDidMount(){
        this.setFavoriteCamps();
    }

    setFavoriteCamps = () => {
        const action = { type: 'SET_FAVORITE_CAMPS'}
        this.props.dispatch(action);
        console.log('action', action);
        
    }


    render() {
        return (
            <div>Favorite Camps
                {JSON.stringify(this.props.reduxStore.setFavoriteCamps)}
                <Card/>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(FavoriteCamps);
