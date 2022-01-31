import express from "express";
import { websiteDataSchema } from "./../database/models/WebsiteData";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(websiteDataSchema);
});

export default router;
