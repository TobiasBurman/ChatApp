const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const jsonWebToken = require("jsonwebtoken");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL);
const jsonWebTokenSecret = process.env.jsonWebTokenSecret;


const app = express();

app.get("/test", (req, res) => {
  res.json("test ok");
})

app.post("/register", async (req, res) => {
  const {username, password} = req.body;
  const createdUser = await UserModel.create({user,password})
  res.json({userId: createdUser._id},jsonWebTokenSecret, (err, token) => {
    if (err) throw err;
    res.cookie("token", token).status(201).json("ok")
  })
})

app.listen(4040);

