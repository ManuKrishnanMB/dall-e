import mongoose from "mongoose";

export const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error"));
};
