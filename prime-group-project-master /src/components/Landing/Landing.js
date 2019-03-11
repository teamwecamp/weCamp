import React, { Component } from 'react';
import { connect } from 'react-redux';


class Landing extends Component{
    render(){
        return(
            <div>
                <div>Landing</div>
                {JSON.stringify(this.props.reduxStore.LandingReducer.campName)}

            </div>
           
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})

export default connect()(Landing);