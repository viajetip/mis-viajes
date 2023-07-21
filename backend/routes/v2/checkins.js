const router = require("express").Router();
const axios = require("axios");
const authMiddleware = require("../../middlewares/authMiddleware");

const Checkin = require("../../models/Checkin");
const User = require("../../models/User"); 

router.post("/", authMiddleware, async (req, res) => {
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

  // Delete
    router.delete("/:id", authMiddleware, async (req, res) => {
        try {
            const checkin = await Checkin.findById(req.params.id);
            if(checkin.userId === req.user._id) {
                await checkin.deleteOne();
                res.status(200).json({msg: "The checkin has been deleted"});
            } else {
                res.status(403).json({msg: "You can delete only your checkin"});
            }
        } catch (err) {
            res.status(500).json(err);
        }
    });



  router.get("/users/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const checkins = await Checkin.find({ userId: user._id.toString()});
        res.status(200).json(checkins);
    } catch (err) {
        console.log('🚨 Error');
        res.status(500).json(err);
    }
  });
  
  
  module.exports = router;
  