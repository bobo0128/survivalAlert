const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Router = require("./Router");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri =  "mongodb+srv://icode123:icode123@cluster0.fs9ai.mongodb.net/SurvivalAlert?retryWrites=true&w=majority";
const uri = process.env.DATABASE_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users.route");
app.use("/users", usersRouter);

const navbarsRouter = require("./routes/navbar.route");
app.use("/navbars", navbarsRouter);

const sysusersRoute = require("./routes/sys.users.route");
app.use("/sys/users", sysusersRoute);

//const sysnavbarsRouter = require("./routes/sys.navbar.route");
//app.use("/sys/navbars", sysnavbarsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
