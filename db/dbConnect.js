/** @format */

const mongoose = require("mongoose");

function connect() {
  console.log(`Connecting to database in progress.....`);

  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connect;
