import Home from "./home.component";
import Earthquake from "./disaster/earthquake.component";
import Hurricane from "./disaster/hurricane.component";
import Airpollution from "./pollution/airpollution.component";
import Waterpollution from "./pollution/waterpollution.component";
import Covid from "./disease/covid.component";
import Hiv from "./disease/hiv.component";
import Cancer from "./disease/cancer.component";
import Africa from "./death/africa.component";
import Antarctica from "./death/antarctica.component";
import Asia from "./death/asia.component";
import Europe from "./death/europe.component";
import Northamerica from "./death/northamerica.component";
import Oceania from "./death/oceania.component";
import Southamerica from "./death/southamerica.component";
import Recoverearth from "./takeaction/recoverearth.component";
import Leaveearth from "./takeaction/leaveearth.component";
import Login from "./login.component";
import SignUp from "./signup.component";
import Successpage from "./success.component";
import { React, Component } from "react";
import { Route, Switch } from "react-router-dom";

export default class SiteRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/earthquake" component={Earthquake} />
          <Route path="/hurricane" component={Hurricane} />
          <Route path="/airpollution" component={Airpollution} />
          <Route path="/waterpollution" component={Waterpollution} />
          <Route path="/covid" component={Covid} />
          <Route path="/hiv" component={Hiv} />
          <Route path="/cancer" component={Cancer} />
          <Route path="/asia" component={Asia} />
          <Route path="/africa" component={Africa} />
          <Route path="/antarctica" component={Antarctica} />
          <Route path="/europe" component={Europe} />
          <Route path="/northamerica" component={Northamerica} />
          <Route path="/oceania" component={Oceania} />
          <Route path="/southamerica" component={Southamerica} />
          <Route path="/recoverearth" component={Recoverearth} />
          <Route path="/leaveearth" component={Leaveearth} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/success" component={Successpage} />
        </Switch>
      </div>
    );
  }
}
