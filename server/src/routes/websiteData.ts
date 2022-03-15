import bodyParser from "body-parser";
import express from "express";
import WebsiteData from "../database/models/WebsiteData";
import { WebsiteDataDocument } from "../interfaces/mongoose.gen";

const router = express.Router();

router.use(bodyParser.json());

router.put("/", async (req, res) => {
  const { data, password } = req.body as {
    data: WebsiteDataDocument;
    password: string;
  };

  if (password !== process.env.PASSWORD) {
    res.status(401).send("Invalid password");
    return;
  }

  try {
    if (await WebsiteData.findById(data._id)) {
      const updatedWebsiteData = await WebsiteData.findByIdAndUpdate(data._id, {
        $set: data,
      });
      res.json(updatedWebsiteData);
    } else {
      const createdWebsiteData = await WebsiteData.create(data);
      res.json(createdWebsiteData);
    }
  } catch {
    res.status(500).send();
  }
});

export default router;
