import express from "express";
import WebsiteData from "../database/models/WebsiteData";

const router = express.Router();

router.get("/", async (req, res) => {
  const websiteDatas = await WebsiteData.find();
  res.send(websiteDatas);
});

export default router;
