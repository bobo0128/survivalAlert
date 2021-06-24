const router = require("express").Router();
let User = require("../models/user.model");

router.route("/getuser").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

//add new user
router.route("/adduser").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const emailaddress = req.body.emailaddress;
  const password = req.body.password;
  console.log(
    "add new user, firstname:" +
      firstname +
      ", lastname:" +
      lastname +
      ",emailaddress:" +
      emailaddress +
      "password:" +
      password
  );
  const newUser = new User({ firstname, lastname, emailaddress, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => {
      res.status(400);
      if (err && err.code == 11000) {
        //duplicated key
        console.log("duplicated key");
        res.status(400).send({
          message: "Emailaddress already exists, try to change to another one.",
          fields: "emailaddress",
        });
      } else {
        console.log("other exceptions");
        res.status(401).send({
          message:
            "Exception occured when add a new user,please check the server service.",
        });
      }
    });
});

//get user by id
router.route("/getbyId/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});

//login, get user by emailaddress
router.route("/login").get((req, res) => {
  const emailaddress = req.query.emailaddress;
  console.log("user login, req.emailaddress is:" + emailaddress);
  User.find({ emailaddress: emailaddress })
    .then((user) => {
      console.log("user.findone, user:" + user);
      res.json(user);
      console.log(res.body);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//update user info
router.route("/updatebyId/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.emailaddress = req.body.emailaddress;
      user.password = req.body.password;

      user
        .save()
        .then(() => res.json("User updated"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});
module.exports = router;
