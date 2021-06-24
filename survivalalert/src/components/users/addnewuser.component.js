import React, { Component } from "react";

export default class AddNewUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = tihs.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onsubmit = this.onsubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      emailaddress: "",
      password: "",
    };
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  onChangeEmailAddress(e) {
    this.setState({
      emailaddress: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.password,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      emailaddress: this.state.emailaddress,
      password: this.state.password,
    };

    console.log("add new user:" + user);

    window.location = "/success";
  }
}
