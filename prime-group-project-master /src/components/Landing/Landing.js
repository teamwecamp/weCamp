import React, { Component } from 'react';
import { connect } from 'react-redux';


class Landing extends Component{




    render(){
        return(
            <div>Landing</div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Landing);