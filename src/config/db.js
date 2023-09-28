import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    await mongoose.connect(uri);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDB;
