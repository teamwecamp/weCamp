import React, { Component } from 'react';
import {connect} from 'react-redux';

class RegisterPage extends Component {
  state = {
    email: '',
    fullname: '',
    password: '',
    street_address: '',
    city: '',
    state: '',
    zip: null,
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.email && this.state.password && this.state.fullname) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          email: this.state.email,
          fullname: this.state.fullname,
          password: this.state.password,
          street_address: this.state.street_address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form className="userRegistrationForm" onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="fullName">
              Full name:
              <input
                type="text"
                name="fullName"
                value={this.state.fullname}
                onChange={this.handleInputChangeFor('fullname')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email*:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="streetAddress">
              Street address:
              <input
                type="text"
                name="streetAddress"
                value={this.state.street_address}
                onChange={this.handleInputChangeFor('street_address')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
              State:
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
              />
            </label>
            <label htmlFor="zip">
              Zip code:
              <input
                type="text"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChangeFor('zip')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

