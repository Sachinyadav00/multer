const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const dbConnection = mongoose.connection;

dbConnection.on("open", () => {
  console.log("Mongodb Connected");
});

dbConnection.on("error", (err) => {
  console.log("Mongodb error", err);
});

module.exports = dbConnection;
