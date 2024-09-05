const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const jsonWebToken = require("jsonwebtoken");
const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL);
const jsonWebTokenSecret = process.env.jsonWebTokenSecret;


const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.APP_URL
})) 

app.use(express.json());

app.get("/test", (req, res) => {
  res.json("test ok");
})

app.post("/register", async (req, res) => {
  const {username, password} = req.body;
  const createdUser = await UserModel.create({username,password})
  jsonWebToken.sign({userId:createdUser._id},jsonWebTokenSecret, {}, (err, token) => {
    if (err) throw err;
    res.cookie("token", token).status(201).json("ok")
  })
})

app.listen(4040);

