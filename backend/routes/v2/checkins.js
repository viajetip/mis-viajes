const router = require("express").Router();
const axios = require("axios");
// CREATE
router.post("/", async (req, res) => {
  try {
    if (req.body.longitude && req.body.latitude) {
      throw new Error("🚨 Error");
    }
    const longitude = req.body.lng;
    const latitude = req.body.lat;

    const url = `https://api.mapbox.com/search/searchbox/v1/reverse?longitude=${longitude}&latitude=${latitude}&access_token=pk.eyJ1IjoiY2hhcmxpZWF3d3ciLCJhIjoiY2xqa216NTNoMGh2ZjNscGtzbnF3dnF2cyJ9.U6Z7HRbHAf-dLrvCG3vQrA`;
    //const url = `https://api.mapbox.com/search/geocode/v6/reverse?types=country%2Cplace&language=es&longitude=${longitude}&latitude=${latitude}&access_token=pk.eyJ1IjoiY2hhcmxpZWF3d3ciLCJhIjoiY2xqa216NTNoMGh2ZjNscGtzbnF3dnF2cyJ9.U6Z7HRbHAf-dLrvCG3vQrA`;
    const response = await axios.get(`${url}`);
    const data = response.data;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
