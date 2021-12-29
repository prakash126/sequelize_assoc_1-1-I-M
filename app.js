const express = require("express");
const CredentialModel = require("./models").Credential;
const UserModel = require("./models").UserDetails;
const TaskModel = require("./models").Task;
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: 1,
    message: "Welcome to homepage",
  });
});

//hasOne
app.get("/users", (req, res) => {
  UserModel.findAll({ include: CredentialModel })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});

app.get("/usercredential", (req, res) => {
  CredentialModel.findAll({ include: UserModel })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});

//hasMany()

app.get("/usertask", (req, res) => {
  UserModel.findAll({ include: TaskModel })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});

app.get("/tasks", (req, res) => {
  TaskModel.findAll({ include: UserModel })
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});

app.listen(PORT, () => {
  console.log("Sever running at 3000");
});
