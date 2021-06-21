const express = require("express");
const Router = express.Router();
const { User, Post } = require("../models");
const homeRoute = Router.get("/", async (req, res) => {
  res.send("<h1>Home Route</h1>");
  return;
});
const postRoute = Router.get("/users", async (req, res) => {
  // res.send("<h1>Post Route</h1>")
  // return
  try {
    const UserList = await User.findAll();
    res.json(UserList);
  } catch (err) {
    res.status(500).json({ err });
  }
}).post("/users", async (req, res) => {
  const { name, number, role } = req.body;
  try {
    const user = await User.create({ name, number, role });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
  // res.json({msg:"message receivded"})
  // return
});

const specificUserRoute = Router.get("/users/:id", async (req, res) => {
  const { id: userid } = req.params;
  //   res.json({ message:"received" });
  //   console.log(userid);
  try {
    const user = await User.findOne({
      where: { userid },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

const createPostRoute = Router.post("/users/:userid/post", async (req, res) => {
  console.log(req.params, req.body);
  const { body } = req.body;
  const { userid } = req.params;
  // res.json({message:"received"})
  try {
    const user = await User.findOne({
      where: { userid },
    });
    // console.log("priting before user",user,"printing after user")
    const data = await Post.create({ body, userid: user.id });
    res.json({ data, mesasge: "success" });
    // res.json({message:"received"})
  } catch (err) {
    res.status(500).json(err);
  }
}).get("/users/:userid/post", async (req, res) => {
  const { userid } = req.params;

  try {
    const user = await User.findOne({
      where: { userid },
    });
    const posts = await Post.findAll({ where: { userid: user.id } });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = homeRoute;
module.exports = postRoute;
module.exports = specificUserRoute;
module.exports = createPostRoute;
// export {homeRoute,postRoute}
