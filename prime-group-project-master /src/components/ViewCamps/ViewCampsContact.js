import React, {Component} from 'react';

class ViewCampsContact extends Component{
    getphone = () => {
        let phone = this.props.camp.phone;
        console.log(phone);
        // let arr = phone.split('');
    }

    socialMedia = () => {
        let twitter;
        if (this.props.camp.twitter === undefined){
            twitter = 'n/a';
        } else {
            twitter = this.props.camp.twitter;
        }
        let instagram; 
        if (this.props.camp.instagram === undefined) {
            instagram = 'n/a';
        } else {
            instagram = this.props.camp.instagram;
        }
        let facebook;
        if (this.props.camp.facebook === undefined) {
            facebook = 'n/a';
        } else {
            facebook = this.props.camp.facebook;
        }
        return (
            <div>
                <p>facebook: {facebook}</p>
                <p>instagram: {instagram}</p>
                <p>twitter: {twitter}</p>
            </div>
        )
    }

    render(){
        return(
            <div>
                <p>{this.props.camp.address}</p>
                <p>Phone: {this.props.camp.phone}</p>
                <a href={this.props.camp.website}>website</a>
                {this.socialMedia()}
            </div>
        )
    }
}

export default ViewCampsContact;