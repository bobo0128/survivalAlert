import { React, Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./login.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username.value,
      password: event.target.password.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let loginuser = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(loginuser);

    try {
      axios
        .get("http://localhost:5000/sys/users/login", {
          params: { username: loginuser.username },
        })
        .then((response) => {
          if (response.data != null && response.data.length > 0) {
            if (response.data[0].password === loginuser.password) {
              //login successfully
              console.log(
                "user " + loginuser.username + " login successfully."
              );
              this.props.handleSuccessfulAuth(loginuser.username);
            } else {
              //password wrong.
              console.log("password wrong for user " + loginuser.username);
              document.getElementById("errormsg").innerText =
                "Invalid Password.";
            }
          } else {
            //email address dose not exists
            console.log(loginuser.username + " does not exists.");
            document.getElementById("errormsg").innerText =
              "User " + loginuser.username + " doesn't exists.";
          }
        });
    } catch (e) {
      console.log("login error:", e);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="loginForm">
          <Form onSubmit={this.handleSubmit}>
            <div className="inputField">
              <Form.Group controlId="username">
                <Form.Control
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required={true}
                />
              </Form.Group>
            </div>
            <div className="inputField">
              <Form.Group controlId="password">
                <Form.Control
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                />
              </Form.Group>
            </div>
            <div className="inputField">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <div id="errormsg" className="center"></div>
          </Form>
        </div>
      </div>
    );
  }
}
