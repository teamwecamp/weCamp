import React, {Component} from 'react';

class ViewCampsContact extends Component{
    getphone = () => {
        let phone = this.props.camp.phone;
        console.log(phone);
        // let arr = phone.split('');
    }

    // this is quick and dirty version. would prefer to attach to social media icons, etc. 
    // will also come back later to fix n/a issue
    socialMedia = () => {
        let twitter;
        if (this.props.camp.twitter === null){
            twitter = 'n/a';
        } else {
            twitter = this.props.camp.twitter;
        }
        let instagram; 
        if (this.props.camp.instagram === null) {
            instagram = 'n/a';
        } else {
            instagram = this.props.camp.instagram;
        }
        let facebook;
        if (this.props.camp.facebook === null) {
            facebook = 'n/a';
        } else {
            facebook = this.props.camp.facebook;
        }
        return (
            <div>
                <p>facebook: <a href={facebook}>{facebook}</a></p>
                <p>instagram: <a href={instagram}>{instagram}</a></p>
                <p>twitter: <a href={twitter}>{twitter}</a></p>
            </div>
        )
    }

    render(){
        return(
            <div className="camp_contacts">
                <h4>Contact</h4>
                <p>{this.props.camp.address}</p>
                <p>Phone: {this.props.camp.phone}</p>
                <a href={this.props.camp.website}>website</a>
                {this.socialMedia()}
            </div>
        )
    }
}

export default ViewCampsContact;