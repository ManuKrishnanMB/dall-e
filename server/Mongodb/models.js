import mongoose from "mongoose";

const GallerySchema = mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const Gallery = mongoose.model("Gallery", GallerySchema);

export default Gallery;
