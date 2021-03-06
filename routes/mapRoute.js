const router = require("express").Router();
const axios = require("axios");
require("dotenv").config({ path: ".env" });

API_KEY = 'AIzaSyBk4_I6kJt42OHcxf-uyDlx7LUtQSykvWw';
BASE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

router.route("/").post((req, res) => {
  const lat = req.body.lat;
  const lon = req.body.lon;
  const radius = req.body.radius;
  const keyword = req.body.keyword;

  if (!lat) res.status(404).send("No latitude found.");
  if (!lon) res.status(404).send("No longitude found.");
  if (!radius) res.status(404).send("No radius found.");

  axios
    .get(
      `${BASE_URL}?location=${lat},${lon}&radius=${radius}&keyword=${keyword}&key=${API_KEY}`
    )
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.data.error);
    });
});

module.exports = router;
