const router = require("express").Router();
const Checkin = require("../models/Checkin");
// CREATE
router.post("/", async (req, res) => {
  const newCheckin = new Checkin(req.body);
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


module.exports = router;
