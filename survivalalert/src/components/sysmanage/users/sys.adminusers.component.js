import { Component, tr } from "react";
import axios from "axios";
import "../login/login.css";
import "../sys.css";
import { Button } from "react-bootstrap";

export default class SysUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminusers: [],
      backendurl: "http://localhost:5000",
    };
    this.showdiv = this.showdiv.bind(this);
    this.hidediv = this.hidediv.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    axios.get(this.state.backendurl + "/sys/users/getall").then((response) => {
      if (response != null && response.data.length > 0) {
        console.log("get adminusers from db, length:" + response.data.length);
        this.setState({ adminusers: response.data });
      } else {
        console.log("fetch sysusers failed.");
      }
    });
  }

  deleteUser(userid) {
    axios
      .post(this.state.backendurl + "/sys/users/delete/" + userid)
      .then((res) => {
        console.log("delete user successfully,id:" + userid);
        this.getUserData();
      })
      .catch((err) => {
        console.log("delete user failed,err:" + err);
      });
  }

  addUser(event) {
    event.preventDefault();
    let newsysuser = {
      username: event.target.username.value,
      password: event.target.password.value,
      usertype: "user",
    };
    axios
      .post(this.state.backendurl + "/sys/users/add", newsysuser)
      .then((res) => {
        this.hidediv();
        this.getUserData();
      })
      .catch((err) => {
        console.log("frontend err occured when add new user:" + err);
        let errormsg =
          err.response.data != null
            ? err.response.data.message
            : "Add user failed.";
        document.getElementById("errormsg").innerText = errormsg;
      });
  }

  showdiv() {
    var x = document.getElementById("adduserDiv");
    x.style.display = "block";
  }

  hidediv() {
    document.getElementById("errormsg").innerText = "";
    var x = document.getElementById("adduserDiv");
    x.style.display = "none";
  }

  editUser(userid, oriUsername) {
    console.log("editUser,userid," + userid);
    let newvalue = document.getElementById(userid).innerText;
    if (newvalue != null) newvalue = newvalue.trim();
    console.log("td new value:" + newvalue);
    if (oriUsername !== newvalue) {
      console.log(
        "user name changed from " +
          oriUsername +
          " to " +
          newvalue +
          ",send request to db"
      );
      axios
        .post(
          this.state.backendurl + "/sys/users/update/" + userid + "/" + newvalue
        )
        .then((res) => {
          console.log("edit user successfully,id:" + userid);
        })
        .catch((err) => {
          console.log("edit user failed,err:" + err);
        });
    } else {
      console.log("no change made on username");
    }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>User Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.adminusers.map((adminuser, index) => (
              <tr>
                <td id={adminuser._id} contentEditable>
                  {adminuser.username}
                </td>
                <td>{adminuser.usertype}</td>
                <td>
                  {adminuser.usertype === "user" && (
                    <Button
                      variant="warning"
                      className="smallbtn"
                      onClick={() =>
                        this.editUser(adminuser._id, adminuser.username)
                      }
                    >
                      Edit
                    </Button>
                  )}
                </td>
                <td>
                  {adminuser.usertype === "user" && (
                    <Button
                      className="smallbtn"
                      variant="warning"
                      onClick={() => this.deleteUser(adminuser._id)}
                    >
                      delete
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.showdiv}>Add</button>
        <div id="adduserDiv" style={{ display: "none" }}>
          <div className="centerForm">
            <form onSubmit={this.addUser}>
              <div className="inputsm">
                <input
                  name="username"
                  type="text"
                  className="input"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="inputsm">
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="inputsm">
                <Button classname="smallbtn" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div class="center" id="errormsg"></div>
      </div>
    );
  }
}
