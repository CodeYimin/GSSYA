import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

if (!process.env.MONGODB_URL) {
  throw new Error("No mongodb url env variable found");
}
mongoose.connect(process.env.MONGODB_URL);

app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
