/** @format */

const express = require("express");

const router = express.Router();

const {
  handleRequest,
  handleRedirect,
} = require("../controllers/shortnerController");
//handle the post request
router.post("/shorten", handleRequest);

//handle the get request
router.get("/:shortId", handleRedirect);

// export the router
module.exports = router;
