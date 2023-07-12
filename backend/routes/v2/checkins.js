const router = require("express").Router();
const axios = require('axios');
// CREATE
router.post("/", async (req, res) => {
  try {
    if(req.body.longitude && req.body.latitude){
        throw new Error('🚨 Error');
    }
    const longitude = req.body.lng;
    const latitude = req.body.lat;
    console.log(longitude, latitude);


    const response = await axios.get(`https://api.mapbox.com/search/searchbox/v1/reverse?longitude=${longitude}&latitude=${latitude}&language=es&access_token=pk.eyJ1IjoiY2hhcmxpZWF3d3ciLCJhIjoiY2xqa216NTNoMGh2ZjNscGtzbnF3dnF2cyJ9.U6Z7HRbHAf-dLrvCG3vQrA`)
    const data = response.data;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
