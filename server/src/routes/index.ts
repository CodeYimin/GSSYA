import express from "express";
import mongooseSchema from "./mongooseSchema";
import websiteData from "./websiteData";
import websiteDatas from "./websiteDatas";

const router = express.Router();

router.use("/websiteDatas", websiteDatas);
router.use("/websiteData", websiteData);
router.use("/mongooseSchema", mongooseSchema);

export default router;
