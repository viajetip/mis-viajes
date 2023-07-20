const router = require("express").Router();
const axios = require("axios");
const authMiddleware = require("../../middlewares/authMiddleware");
// CREATE

router.get("/nearBy", authMiddleware, async (req, res) => {
  try {
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    
    if (!longitude || !latitude) {
      throw new Error("🚨 Error");
    }
    // https://api.mapbox.com/search/searchbox/v1/reverse?longitude=2.294479&latitude=48.858296&access_token=pk.eyJ1IjoiY2hhcmxpZWF3d3ciLCJhIjoiY2xqa216NTNoMGh2ZjNscGtzbnF3dnF2cyJ9.U6Z7HRbHAf-dLrvCG3vQrA 48.858296°, 2.294479
    const url = `https://api.mapbox.com/search/searchbox/v1/reverse?longitude=${longitude}&latitude=${latitude}&limit=10&access_token=pk.eyJ1IjoiY2hhcmxpZWF3d3ciLCJhIjoiY2xqa216NTNoMGh2ZjNscGtzbnF3dnF2cyJ9.U6Z7HRbHAf-dLrvCG3vQrA`;
    const response = await axios.get(`${url}`);
    const data = response.data;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
