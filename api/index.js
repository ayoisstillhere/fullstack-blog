const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

dbURI =
  "mongodb+srv://afagbami:qcssRq52gt22tuOS@cluster0.djv2j68.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

app.listen(4000);
