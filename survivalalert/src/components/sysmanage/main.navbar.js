import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SysNavbar from "./navbars/sys.navbar.component";
import SysUsers from "./users/sys.adminusers.component";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem("currentUser");
    this.props.history.push("/sys");
  }

  render() {
    return (
      <Router>
        <div className="Container">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link as={Link} to="/sys/main/sysusers">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="/sys/main/navbar">
                Navbar
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Authorization
              </Nav.Link>
            </Navbar.Collapse>
            <h6 style={{ color: "Tomato" }}>
              {"Welcome, " + localStorage.getItem("currentUser")}
            </h6>
            <Button className="smallbtn" onClick={this.handleLogout}>
              Logout
            </Button>
          </Navbar>
          <Switch>
            <Route
              path="/sys/main/sysusers"
              render={(props) => <SysUsers {...props} />}
            />
            <Route path="/sys/main/navbar" component={SysNavbar} />
          </Switch>
        </div>
      </Router>
    );
  }
}
