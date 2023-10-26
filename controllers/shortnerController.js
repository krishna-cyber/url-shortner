/** @format */

const shortid = require("shortid");
const { URL } = require("../models/urlSchema");

async function handleRequest(req, res) {
  const { redirectURL } = req.body;

  if (!redirectURL) {
    return res.status(400).json({
      status: "error",
      error: "Invalid URL",
    });
  }

  const shortId = shortid.generate();
  //save information to the database
  await URL.create({ shortId, redirectURL }).then((url) => {
    return res.status(201).json({
      status: "success",
      url,
    });
  });
}

async function handleRedirect(req, res) {
  const { shortId } = req.params;

  //find the url in the database
  const url = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    {
      new: true,
    }
  );

  console.log(url);

  if (!url) {
    return res.status(404).json({
      status: "error",
      error: "URL not found",
    });
  }

  //redirect the user to the url
  return res.redirect(url.redirectURL);
}
async function getAllUrls(req, res) {
  const urls = await URL.find({});

  if (!urls) {
    return res.status(404).json({
      status: "error",
      error: "URL not found",
    });
  }

  return res.status(200).json({
    status: "success",
    urls,
  });
}

module.exports = {
  handleRequest,
  handleRedirect,
  getAllUrls,
};
