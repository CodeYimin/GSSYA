import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
const PORT = 4000;

mongoose.connect(
  "mongodb+srv://ssytutor:ssytutor%21%21SSYTUTOR@gssya.pu7cx.mongodb.net/websiteDB"
);

app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
