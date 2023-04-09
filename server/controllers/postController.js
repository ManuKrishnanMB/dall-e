import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";

// model
import Gallery from "../Mongodb/models.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    // Get Cloudinary optimized URL
    const photoUrl = await cloudinary.uploader.upload(photo);
    //   Save DATA in database
    const newPost = Gallery.create({ name, prompt, photo: photoUrl.url });
    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const fetchFromDB = async (req, res) => {
  try {
    const data = await Gallery.find({});
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
