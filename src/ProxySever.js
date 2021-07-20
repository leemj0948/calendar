// import express from 'express';
const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const corsOption = {
  origin: '*',
  methods: 'GET,OPTION,PUT,DELETE,POST',
};
app.use(cors());
app.use(express.json());
app.use('/', cors(corsOption), (req, res) => {
  const params = req.query;
  axios
    .get(
      `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${params.solYear}&solMonth=${params.solMonth}&ServiceKey=%2B38WhaVhWMOoUF9ImhSJLAJBcJxargI9xyzkd6c79TGqzqayO2TpJSYCdump8kI6y%2F%2Bfpupnlw94fWd%2BZnKQWg%3D%3D`
    )
    .then((json) => {
      res.send(json.data.response.body.items);
    })
    .catch(() => {
      res.send(JSON.stringify({ message: 'System Error' }));
      //
    });
});

app.listen(8000);
