import express from "express";

// controller
import { generate, hello } from "../controllers/dalleController.js";

const dalleRouter = express.Router();

dalleRouter.post("/generate", generate);
dalleRouter.post("/test", hello);

export default dalleRouter;
