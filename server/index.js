import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { connectDB } from "./Mongodb/connectDB.js";
import dalleRouter from "./Routes/dalleRoutes.js";
import postRouter from "./Routes/postRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRouter);
app.use("/api/v1/dalle", dalleRouter);
app.get("/", async (req, res) => res.send("hello from DALL-E"));

const startServer = async () => {
  try {
    const url = process.env["DATABASE"].replace(
      "<PASSWORD>",
      process.env["DATABASE_PASSWORD"]
    );
    connectDB(url);
  } catch (error) {
    console.log(error);
  }
  app.listen(8080, () =>
    console.log("Server started on port http://localhost:8080")
  );
};

startServer();
