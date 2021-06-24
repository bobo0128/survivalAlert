//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SystemManageEntrance from "./components/sysmanage/sys.entrance.component";
import MainEntrance from "./components/site.entrance.component";
import { React, Component } from "react";
export default class App extends Component {
  render() {
    console.log("enter app component");
    return (
      <Router>
        <Switch>
          <Route path="/sys" component={SystemManageEntrance} />
          <Route path="/" component={MainEntrance} />
        </Switch>
      </Router>
    );
  }
}
