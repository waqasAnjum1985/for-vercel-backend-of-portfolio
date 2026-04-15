const mongoose = require("mongoose");

const db = process.env.MONGO_CONN;

let isConnected;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    isConnected = true;
    console.log("Mongo DB connected successfully...");
  } catch (err) {
    console.log("err while connecting Mongo DB", err);
  }
};
const connectionDropped = (req, res, next) => {
  if (!isConnected) {
    connectMongo();
  }
  next();
};

module.exports = {
  connectDB,
  connectionDropped,
};
