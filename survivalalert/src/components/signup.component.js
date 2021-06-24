import React from "react";
import { Jumbotron } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      emailaddress: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      emailaddress: event.target.emailaddress.value,
      password: event.target.password.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newuser = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      emailaddress: event.target.emailaddress.value,
      password: event.target.password.value,
    };

    console.log(newuser);
    /* axios.post("http://localhost:5000/users/adduser", newuser).then((res) => {
      if (res.status == 400) {
        console.log("create new user error,", res.body);
        document.getElementById("errormsg").innerText = res.body;
      } else {
        console.log(res.data);
        window.location = "/success";
      }
    }); */

    axios
      .post("http://localhost:5000/users/adduser", newuser)
      .then((res) => {
        window.location = "/success";
      })
      .catch((err) => {
        console.log(
          "222 frontend err occured when add new user:" + err.response.status
        );
        if (err.response.status === 400) {
          console.log("333 err state 400");
          document.getElementById("errormsg").innerText =
            err.response.data.message;
        }
      });
  }

  render() {
    return (
      <Jumbotron>
        <form className="Container" onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>
          <p>
            <label>Firstname</label>
            <input
              name="firstname"
              type="text"
              className="formInput"
              required
            />
          </p>
          <p>
            <label>Lastname</label>
            <input name="lastname" type="text" className="formInput" required />
          </p>
          <p>
            <label>Email address</label>
            <input
              name="emailaddress"
              type="email"
              className="formInput"
              required
            />
          </p>
          <p>
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="formInput"
              required
            />
          </p>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered{" "}
            <Link as={Link} to="/sign-in">
              Login
            </Link>
          </p>
          <div id="errormsg" className="center"></div>
        </form>
      </Jumbotron>
    );
  }
}

export default SignUp;
