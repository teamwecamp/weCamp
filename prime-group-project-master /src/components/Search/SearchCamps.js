import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchCamps extends Component {

    componentDidMount = () => {
        this.setSearchCamps();
    }

    setSearchCamps = () => {
        const action = {type: 'FETCH_SEARCH_CAMPS'}
        this.props.dispatch(action);
        console.log('action', action);
    }
    render() {
        return (
            <div>Search Camps</div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(SearchCamps);
