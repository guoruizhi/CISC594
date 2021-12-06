import express from "express";
import User from "../model/user";

const api = express.Router();

api.get("/", (req, res) => {
  console.log(req.query);
  User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(users);
  }).sort({ [req.query.title]: req.query.sort });
});

api.post("/", (req, res) => {
  let newUser = new User();
  newUser.lastName = req.body.lastName;
  newUser.firstName = req.body.firstName;
  newUser.sex = req.body.sex;
  newUser.age = req.body.age;
  newUser.password = req.body.password;

  newUser.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "new user saved successfully" });
  });
});

api.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    console.log(err, user);
    res.json(user);
  });
});

api.put("/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    console.log(req.body);
    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    user.sex = req.body.sex;
    user.age = req.body.age;
    user.password = req.body.password;

    user.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "user update success" });
    });
  });
});

api.delete("/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Delete user success" });
  });
});
export default api;
