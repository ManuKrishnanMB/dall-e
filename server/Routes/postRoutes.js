import express from "express";

import {
  uploadToCloudinary,
  fetchFromDB,
} from "../controllers/postController.js";

const postRouter = express.Router();

// get data from DB
postRouter.get("/", fetchFromDB);

// Upload new images to cloudinary and save the data in MongoDB
postRouter.post("/", uploadToCloudinary);

export default postRouter;
