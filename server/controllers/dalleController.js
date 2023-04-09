import { OpenAIApi, Configuration } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openaiConfig = new Configuration({ apiKey: process.env.OPEN_AI_API_KEY });
const openAI = new OpenAIApi(openaiConfig);

export const generate = async (req, res) => {
  try {
    const prompt = req.body["prompt"];
    console.log("The PROMPT:", prompt);
    const ai = await openAI.createImage({
      prompt: prompt,
      // number of images to generate
      n: 1,
      size: "256x256",
      response_format: "b64_json",
    });
    const image = ai.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
};

// test
export const hello = (req, res) =>
  res.status(200).json({ msg: `HELLO, ${req.body.prompt}` });
