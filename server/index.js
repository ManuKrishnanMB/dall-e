import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { connectDB } from "./mongodb/connect";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => res.send("hello"));

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB);
  } catch (error) {
    console.log(error);
  }
  app.listen(8080, () =>
    console.log("Server started on port http://localhost:8080")
  );
};

startServer();
