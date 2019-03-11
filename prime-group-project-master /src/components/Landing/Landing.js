import React, { Component } from 'react';
import { connect } from 'react-redux';


class Landing extends Component{




    render(){
        return(
            <div>Landing</div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Landing);