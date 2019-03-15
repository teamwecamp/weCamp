import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Landing from '../Landing/Landing';
import SearchCamps from '../Search/SearchCamps';
import Favorites from '../Favorite/FavoriteCamps';
import CampRegistration from '../CampRegistration/CampRegistration';
import CampRegistrationPage2 from '../CampRegistration/CampRegistrationPage2';
import CampRegistrationPage3 from '../CampRegistration/CampRegistrationPage3';
import CampRegistrationPage4 from '../CampRegistration/CampRegistrationPage4';
import ViewCamps from '../ViewCamps/ViewCamps';
import NavBar from '../Nav/NavBar';
import Shared from '../Shared/Shared';
import Itinerary from '../Itinerary/Itinerary';


import './App.css';


class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <NavBar/>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />

            <Route
              exact
              path="/search"
              component={SearchCamps}
            />

            <Route
              exact
              path="/landing"
              component={Landing}
            />
            <Route
              exact
              path="/campregistration"
              component={CampRegistration}
            />
            <Route
              exact
              path="/campregistrationpage2"
              component={CampRegistrationPage2}
            />
            <Route
              exact
              path="/campregistrationpage3"
              component={CampRegistrationPage3}
            />
            <Route
              exact
              path="/campregistrationpage4"
              component={CampRegistrationPage4}
            />
            <Route
              exact
              path="/viewCamp/:id"
              component={ViewCamps}
              />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/favorites"
              component={Favorites}
            />
            <ProtectedRoute
              exact
              path="/itinerary"
              component={Itinerary}
            />
            <ProtectedRoute
              exact
              path="/shared"
              component={Shared}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
