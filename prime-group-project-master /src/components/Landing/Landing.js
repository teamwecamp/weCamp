import React, { Component } from 'react';
import { connect } from 'react-redux';
import LandingRecentCamps from './LandingRecentCamps';
import LandingSponsoredCamps from './LandingSponsoredCamps';


class Landing extends Component {

    goToSearch = () => {
        this.props.history.push('/search')
    }


    render() {
        return (
            <div>
                <div>Landing</div>
                {JSON.stringify(this.props.reduxStore.LandingReducer)}
                <LandingRecentCamps />
                <button onClick={this.goToSearch}>
                    Find Camps
                </button>
                <LandingSponsoredCamps />
            </div>

        )
    }
}



const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Landing);


