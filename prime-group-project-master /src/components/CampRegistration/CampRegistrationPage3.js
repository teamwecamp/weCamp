import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

//this addes styling to only the form.
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  description: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 1000
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 400
  }
});

class CampRegistrationPage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const activity = target.name;

    this.setState({
      [activity]: value
    });
  }

  componentDidMount = () => {
    //insert action to get drop down info here.
    this.getDropDowns();
  };
  getDropDowns = () => {
    const action = { type: "FETCH_SEARCH_CAMPS_DROP_DOWN" };
    this.props.dispatch(action);
  };

  setOptions = event => {
    event.preventDefault();
    const trueState = [];
    for (let key in this.state) {
      if (this.state[key] === true) {
        trueState.push(key);
      }
    }
    console.log(trueState);
    this.props.history.push("/campregistrationpage4");
  };
  
//This is the map to loop through the activies to make check boxes.
  mapInfo = () => {
    return (
      this.props.dropDown.activities !== undefined &&
      this.props.dropDown.activities.map((option, i) => {
        const desc = option.activity;
        return (
          <label key={i}>
            <input
              name={option.id}
              type="checkbox"
              checked={this.state.desc}
              onChange={this.handleChange}
            />
            {desc}
          </label>
        );
      })
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Camp Registration Page 3</h1>
        <h2>Select Activities Provided by your camp</h2>
        <form onSubmit={this.setOptions}>
          {this.mapInfo()}
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

CampRegistrationPage3.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = reduxStore => ({
  dropDown: reduxStore.setSearchCamps.setCampDropDown
});

export default connect(mapStateToProps)(
  withStyles(styles)(CampRegistrationPage3)
);
