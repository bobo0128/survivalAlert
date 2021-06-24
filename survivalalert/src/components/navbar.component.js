import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import React, { Component } from "react";
import axios from "axios";

export default class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navbar: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/navbars/getall").then((response) => {
      if (response != null && response.data.length > 0) {
        console.log("get navbar from db, length:" + response.data.length);
        this.setState({ navbar: response.data });
        console.log(this.state.navbar.length);
      } else {
        console.log("fetch navbar failed.");
      }
    });
  }

  render() {
    return (
      <div className="Container">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="data:image/png;base64,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"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Survival Alert on Earth
          </Navbar.Brand>
          {/* <Nav.Link href="/Earthquake">Earthquake</Nav.Link> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.state.navbar.map((parentTitle, index) => (
                <NavDropdown
                  key={parentTitle.titleid}
                  title={parentTitle.title}
                  id={parentTitle.titleid}
                >
                  {parentTitle.item.map((itemarray, i) => (
                    <NavDropdown.Item
                      key={itemarray.path}
                      as={Link}
                      to={itemarray.path}
                    >
                      {itemarray.itemname}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
