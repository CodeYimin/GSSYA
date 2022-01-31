import express from "express";
import mongooseSchema from "./mongooseSchema";
import websiteDatas from "./websiteDatas";

const router = express.Router();

router.use("/websiteDatas", websiteDatas);
router.use("/mongooseSchema", mongooseSchema);

export default router;
