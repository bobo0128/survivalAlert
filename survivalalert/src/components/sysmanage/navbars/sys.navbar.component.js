import { Component, Button } from "react";
import axios from "axios";
//import "../sys.css";

export default class SysNavbar extends Component {
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
      <div>
        {this.state.navbar.map((parentTitle, index) => (
          <table>
            <thead>
              <th colSpan="4">{parentTitle.title}</th>
            </thead>
            <tbody>
              {parentTitle.item.map((itemarray, i) => (
                <tr>
                  <td width="30%">{itemarray.itemname}</td>
                  <td width="20%">
                    <a href="#">detail</a>
                  </td>
                  <td width="20%">
                    <a href="#">edit</a>
                  </td>
                  <td width="20%">
                    <a href="#">delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    );
  }
}
