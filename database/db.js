import mongoose from "mongoose";

const connection = async (url) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(url);
    console.log("MongoDB is successfully connected");
  } catch (error) {
    console.log("Error while connecting to MongoDB:", error.message);
  }
};

export default connection;
