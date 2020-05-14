const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err));

module.exports = { connectDB };
