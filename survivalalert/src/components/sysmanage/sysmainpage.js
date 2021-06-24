import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SysNavbar from "./navbars/sys.navbar.component";
import SysUsers from "./users/sys.adminusers.component";
import { React, Component } from "react";
import MainNavbar from "./main.navbar";

export default class MainSysPage extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("enter app component");
    return (
      <Router>
        <Route
          exact
          path={"/sys/main"}
          render={(props) => <MainNavbar {...props} />}
        />
        <Switch>
          <Route
            path="/sys/main/sysusers"
            render={(props) => <SysUsers {...props} />}
          />
          <Route path="/sys/main/navbar" component={SysNavbar} />
        </Switch>
      </Router>
    );
  }
}
