import React, { Component } from 'react';
import { connect } from 'react-redux';


class Landing extends Component{

goToSearch = ()=>{
    this.props.history.push('/search')
}


    render(){
        return(
            <div>
                <div>Landing</div>
                {JSON.stringify(this.props.reduxStore.LandingReducer)}
                <button onClick={this.goToSearch}>
                Find Camps
                </button>
            </div>
           
        )
    }
}



const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Landing);


