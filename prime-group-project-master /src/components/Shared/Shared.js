import React, { Component } from 'react';
import { connect } from 'react-redux';


class Shared extends Component {


    componentDidMount = () => {
        this.setSharedAccess();
    }

    setSharedAccess() {
        const action = { type: 'SET_SHARED_ACCESS' }
        this.props.dispatch(action);
    }


    render() {
        return (
            <div>Shared
                {JSON.stringify(this.props.reduxStore.setSharedAccess)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(Shared);