const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/comics", (req, res) => {
  axios
    .get(
      "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=rPXobUSL4bvVhGDW"
    )
    .then((response) => {
      let mainData = response.data;
      //console.log(mainData);
      res.json({ mainData });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/characters", (req, res) => {
  axios
    .get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=rPXobUSL4bvVhGDW"
    )
    .then((response) => {
      let charactData = response.data;
      //console.log(mainData);
      res.json({ charactData });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
