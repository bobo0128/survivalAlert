class Router {
  constructor(app, db) {
    console.log("#############router constructor###################");
    const usersRouter = require("./routes/users.route");
    app.use("/users", usersRouter);

    const navbarsRouter = require("./routes/navbar.route");
    app.use("/navbars", navbarsRouter);

    const sysusersRoute = require("./routes/sys.users.route");
    app.use("/sys/users", sysusersRoute);
    this.login(app, db);
    //this.logout(app, db);
    //this.isLoggedIn(app, db);
  }

  login(app, db) {
    app.post("/sys/users/login", (req, res) => {
      let username = req.body.username;
      let password = req.body.password;
      console.log("user login,username:" + username);
    });
  }
}

module.exports = Router;
