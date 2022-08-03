const axios = require("axios");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

app.get("/comics", (req, res) => {
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API}`
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

app.get("/comics/:characterId", (req, res) => {
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API}`
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
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API}`
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

app.get("/character/:characterId", (req, res) => {
  axios
    .get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.API}`
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

app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT),
  () => {
    console.log("Server has started");
  };
