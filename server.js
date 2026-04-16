//core modules
const express = require("express");
//imported modules
require("dotenv").config();
//local modules
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const portfolioRouter = require("./routes/portfolioRoute.js");
const mongoose = require("mongoose");

const corsOptions = {
  origin: ["https://anjum-alpha.vercel.app", "http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());

let isConnected = false;

async function connectToMingoDB() {
  try {
    await mongoose.connect(process.env.MONGO_CONN);
    isConnected = true;
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("error while connecting Mongose", error);
  }
}

app.use((req, res, next) => {
  if (!isConnected) {
    connectToMingoDB();
  }
  next();
});

app.use("/api/portfolio", portfolioRouter);

module.exports = app;
