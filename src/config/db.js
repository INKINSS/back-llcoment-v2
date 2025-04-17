import mongoose from "mongoose";

const connectDB = async () => {
  const username = process.env.MONGODB_URI_USERNAME;
  const password = process.env.MONGODB_URI_PASSWORD;
  const database = process.env.MONGODB_URI_DATABASE;

  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@llcoment.dscnrjd.mongodb.net/${database}?retryWrites=true&w=majority&appName=llcoment`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectDB;
