const router = require("express").Router();
let NavbarModel = require("../models/navbar.model");

router.route("/getall").get((req, res) => {
  NavbarModel.find()
    .then((navbars) => res.json(navbars))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const titleid = req.body.titleid;
  const item = [req.body.item];
  const newChildItem = new itemSchema();

  console.log("add new navbar item, title:" + title + ", titleid:" + titleid);
  const newNavbarItem = new NavbarModel({ title, titleid, item });

  newNavbarItem
    .save()
    .then(() => res.json("Navbar Item added!"))
    .catch((err) => {
      console.log("err occured when add new navbar item.");
      res.status(400);
      console.log("other exceptions");
      res.status(401).send({
        message:
          "Exception occured when add a new navbar item,please check the server service.",
      });
    });
});

module.exports = router;
