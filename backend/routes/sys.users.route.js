const router = require("express").Router();
let AdminUser = require("../models/sys.user.model");

router.route("/getall").get((req, res) => {
  AdminUser.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

//add new user
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const usertype = req.body.usertype;
  const permission = req.body.permission;
  console.log(
    "add new admin user, username:" + username + ",password:" + password
  );
  const newAdminUser = new AdminUser({
    username,
    password,
    usertype,
    permission,
  });

  newAdminUser
    .save()
    .then(() => res.json("Admin User added!"))
    .catch((err) => {
      console.error("err occured when add new Admin user.", err);

      res.status(400);
      if (err && err.code == 11000) {
        //duplicated key
        res.status(400).send({
          message: "Username already exists, try to change to another one.",
          fields: "Username",
        });
      } else {
        console.log("other exceptions", err);
        res.status(401).send({
          message:
            "Exception occured when add a new user,please check the server service.",
        });
      }
    });
});

//get user by id
router.route("/getbyId/:id").get((req, res) => {
  AdminUser.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});

//delete sysuser by id
router.route("/delete/:id").post((req, res) => {
  AdminUser.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log("delete user succesfully by id," + req.params.id);
      res.json("Admin User deleted!");
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

//login, get adminuser by username
router.route("/login").get((req, res) => {
  const inputusername = req.query.username;
  AdminUser.find({ username: inputusername })
    .then((user) => {
      console.log("user.findone, user:" + user);
      res.json(user);
      console.log(res.body);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//update user info
router.route("/update/:userid/:username").post((req, res) => {
  let userid = req.params.userid;
  let username = req.params.username;
  console.log("update admin user, id:" + userid + ", newname:" + username);
  AdminUser.findByIdAndUpdate({ _id: userid }, { username: username })
    .then(() => {
      console.log(
        "update user succesfully by id," + userid + ",new username:" + username
      );
      res.json("Admin User updated!");
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});
module.exports = router;
