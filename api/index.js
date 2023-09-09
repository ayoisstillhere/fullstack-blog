const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const dbURI = require("./constants");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();

const salt = bycrypt.genSaltSync(10);
const secret = "3adfsdvrfrverfdcsdffvgbsdsvdcwsedvedcrw3245sc";

app.use(cors());
app.use(express.json());

mongoose.connect(dbURI);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bycrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bycrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json({ message: "Wrong credentials" });
  }
});

app.listen(4000);
