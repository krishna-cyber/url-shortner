/** @format */

const express = require("express");

const router = express.Router();

const {
  handleRequest,
  handleRedirect,
  getAllUrls,
} = require("../controllers/shortnerController");
//handle the post request
router.post("/shorten", handleRequest);

//handle the get request
router.get("/:shortId", handleRedirect);

//get all the shortned url
router.get("/get/urls", getAllUrls);

// export the router
module.exports = router;
