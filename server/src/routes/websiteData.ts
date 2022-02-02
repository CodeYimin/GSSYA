import bodyParser from "body-parser";
import express from "express";
import WebsiteData from "../database/models/WebsiteData";
import { WebsiteDataDocument } from "../interfaces/mongoose.gen";

const router = express.Router();

router.use(bodyParser.json());

router.put("/", async (req, res) => {
  const newWebsiteData = req.body as WebsiteDataDocument;

  await WebsiteData.updateOne(
    { _id: newWebsiteData._id },
    { $set: newWebsiteData }
  );

  res.sendStatus(200);
});

export default router;
