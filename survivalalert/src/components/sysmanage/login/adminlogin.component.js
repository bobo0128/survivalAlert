import { React, Component } from "react";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    //TODO update parent component
    this.props.handleLogin(data);
    this.props.history.push("/sys/main");
  }

  render() {
    return (
      <div>
        <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
