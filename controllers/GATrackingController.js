"use strict";
var GA4 = require("react-ga4").default;
GA4.initialize("G-85G9QPGZMB");

module.exports = {
  track: (req, res) => {
    const response = {
      status: 200,
    };

    console.log("GA4--------------------", req.body);
    
    GA4.event({
      category: req.body.category,
      action: req.body.action,
      label: req.body.label, // optional
      // value: value, // optional, must be a number
      // nonInteraction: true, // optional, true/false
      // transport: "xhr", // optional, beacon/xhr/image
    });

    res.json(response);
  },
};
