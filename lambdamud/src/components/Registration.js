import React, { Component } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

const host = "https://stefarg-lambdamud.herokuapp.com";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password1: "",
      password2: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  register = e => {
    console.log("register attempted");
    e.preventDefault();
    Axios.post(`${host}/api/registration/`, this.state)
      .catch(function(error) {
        alert(error.response.data.error);
      })
      .then(
        function(response) {
          console.log(response);
        },

        this.setState({
          username: "",
          password1: "",
          password2: ""
        })
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => (this.register(e), this.props.history.push("/"))}>
          <input
            onChange={this.handleInputChange}
            placeholder="username"
            value={this.state.username}
            name="username"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Password"
            value={this.state.password1}
            name="password1"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Confirm Password"
            value={this.state.password2}
            name="password2"
          />
          <button type="submit">Submit</button>
        </form>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </div>
    );
  }
}
export default Registration;
