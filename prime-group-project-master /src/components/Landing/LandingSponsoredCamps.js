import React, { Component } from 'react';
import { connect } from 'react-redux';


class LandingSponsoredCamps extends Component {

    componentDidMount = () => {
        this.setSponsoredCamps();
    }

 
    setSponsoredCamps = () => {
        const action = { type: 'FETCH_SPONSORED_CAMPS' };
        this.props.dispatch(action);
        console.log('action', action);

    }
    render() {
        return (
            <div>
                <h5>Sponsored Camps</h5> 

                {JSON.stringify(this.props.sponCamps)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    sponCamps: reduxStore.Landing.setSponsoredCamps
});
export default connect(mapStateToProps)(LandingSponsoredCamps);