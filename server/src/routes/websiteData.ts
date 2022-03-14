import bodyParser from "body-parser";
import express from "express";
import WebsiteData from "../database/models/WebsiteData";
import { WebsiteDataDocument } from "../interfaces/mongoose.gen";

const router = express.Router();

router.use(bodyParser.json());

router.put("/", async (req, res) => {
  const newWebsiteData = req.body as WebsiteDataDocument;

  try {
    if (await WebsiteData.findById(newWebsiteData._id)) {
      const updatedWebsiteData = await WebsiteData.findByIdAndUpdate(
        newWebsiteData._id,
        { $set: newWebsiteData }
      );
      res.json(updatedWebsiteData);
    } else {
      const createdWebsiteData = await WebsiteData.create(newWebsiteData);
      res.json(createdWebsiteData);
    }
  } catch {
    res.status(500).send();
  }
});

export default router;
