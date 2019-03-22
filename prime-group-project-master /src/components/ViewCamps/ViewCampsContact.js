import React, { Component } from 'react';

class ViewCampsContact extends Component {
    componentDidMount = () => {
        let phone = this.props.camp.phone;
        console.log(phone);
    }

    //social media conditional renders    
    facebook = () => {
        if (this.props.camp.facebook !== null){
            return <a target="_blank" href={this.props.camp.facebook}><img className="socialMedia" src='socialMedia/iconfinder_Asset_2_2001646.png' /></a>
        }
    }

    twitter = () => {
        if (this.props.camp.twitter !== null) {
            return <a target="_blank" href={this.props.camp.twitter}><img className="socialMedia" src='socialMedia/iconfinder_Asset_3_2001676.png' /></a>
        }
    }

    instagram = () => {
        if (this.props.camp.instagram !== null) {
            return <a target="_blank" href={this.props.camp.instagram}><img className="socialMedia" src='socialMedia/iconfinder_Asset_16_2001652.png' /></a>
        }
    }

    //This will work for demo - will be an issue if user is able to enter a phone in another format
    phone = () => {
        let phoneArr = this.props.camp.phone.split('');
        let newArr = [];
        newArr.push(phoneArr[0]);
        newArr.push(phoneArr[1]);
        newArr.push(phoneArr[2]);
        newArr.push('-');
        newArr.push(phoneArr[3]);
        newArr.push(phoneArr[4]);
        newArr.push(phoneArr[5]);
        newArr.push('-');
        newArr.push(phoneArr[6]);
        newArr.push(phoneArr[7]);
        newArr.push(phoneArr[8]);
        newArr.push(phoneArr[9]);
        let newPhone = newArr.join('');
        return newPhone;
    }


    render() {
        return (
            <div className="camp_contacts">
                <h4>Contact</h4>
                <p>{this.props.camp.address}</p>
                {this.props.camp.phone !== undefined &&
                    <p>Phone: {this.phone()}</p>}
                <a target="_blank" href={this.props.camp.website}>website</a>
                <br/>
                <div className="social">
                {this.facebook()}
                {this.twitter()}
                {this.instagram()}
                </div>
            </div>
        )
    }
}

export default ViewCampsContact;