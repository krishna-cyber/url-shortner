/** @format */
//env setup
require("dotenv").config();

const express = require("express");
const app = express();
const connect = require("./db/dbConnect");
connect(); //connecting to the database
const PORT = process.env.PORT || 5000;

//getting the routes
const routes = require("./routes/routes");

app.use(express.json());
//using the route
app.use("/", routes);

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
