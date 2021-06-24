import { React, Component } from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailaddress: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      emailaddress: event.target.emailaddress.value,
      password: event.target.password.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let emailaddress = event.target.emailaddress.value;
    let password = event.target.password.value;

    console.log("frontend loginuser ", emailaddress);
    axios
      .get("http://localhost:5000/users/login", {
        params: { emailaddress: emailaddress },
      })
      .then((response) => {
        if (response.data != null && response.data.length > 0) {
          if (response.data[0].password === password) {
            //login successfully
            console.log("user " + emailaddress + " login successfully.");
            window.location = "/success";
          } else {
            //password wrong.
            console.log("password wrong for user " + emailaddress);
            document.getElementById("errormsg").innerText = "Password wrong.";
          }
        } else {
          //email address dose not exists
          console.log(emailaddress + " does not exists in database.");
          let msg = emailaddress + " doesn't exists.";
          document.getElementById("errormsg").innerText = msg;
        }
      });
  }

  render() {
    return (
      <Jumbotron>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <Form.Group controlId="emailaddress">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="emailaddress"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <p>
              <Form.Control type="password" name="password" />
            </p>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div id="errormsg" className="center"></div>
        </Form>
      </Jumbotron>
    );
  }
}
