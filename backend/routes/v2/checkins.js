const router = require("express").Router();
const axios = require("axios");
const authMiddleware = require("../../middlewares/authMiddleware");

const Checkin = require("../../models/Checkin");
const User = require("../../models/User"); 

router.post("/", authMiddleware, async (req, res) => {
    console.log('✅', req.user);
    
    const response = {...req.body, userId: req.user};

    const newCheckin = new Checkin(response);
    try {
      const savedCheckin = await newCheckin.save();
      res.status(200).json(savedCheckin);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET
  router.get("/", async (req, res) => {
      try {
          const checkins = await Checkin.find();
          res.status(200).json(checkins);
      } catch (err) {
          console.log('🚨 Error');
          res.status(500).json(err);
      }
  });

  router.get("/users/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        console.log('🚨', user._id.toString());
        const checkins = await Checkin.find({ userId: user._id.toString()});
        res.status(200).json(checkins);
    } catch (err) {
        console.log('🚨 Error');
        res.status(500).json(err);
    }
  });
  
  
  module.exports = router;
  