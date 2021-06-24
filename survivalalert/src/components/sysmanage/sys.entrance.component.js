import { React, Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainNavbar from "./main.navbar";
import MainSysPage from "./sysmainpage";
import Login from "./login/adminlogin.component";

export default class SystemManageEntrance extends Component {
  constructor() {
    super();
    /*     this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    }; */

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    localStorage.setItem("currentUser", data);
    /* this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data,
    }); */
  }

  handleLogOut() {
    localStorage.removeItem("currentUser");
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path={"/sys"}
            render={(props) => (
              <Login {...props} handleLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path={"/sys/main"}
            render={(props) => <MainNavbar {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
