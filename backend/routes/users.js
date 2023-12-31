const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // save user and respond
    const user = await newUser.save();

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.USER_KEY
    );

    res.status(200).json({token, id: user._id, username: user.username});
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        // find user
        const user = await User.findOne({username: req.body.username});
        // compare password
        if(!user ) {
            res.status(400).json({msg:"Wrong username or password!"})
            return;
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        //!validPassword && res.status(400).json("Wrong username or password!");
        if(!validPassword) {
            res.status(400).json({msg:"Wrong username or password!"})
            return;
        }

        const token = jwt.sign(
            { _id: user._id, username: user.username },
            process.env.USER_KEY
        );

        // send response
        res.status(200).json({_id: user._id, accessToken: token, username: user.username});

        // respond

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
