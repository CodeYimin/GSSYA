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

// WebsiteData.findOneAndUpdate(
//   { language: "English" },
//   {
//     $set: {
//       navigationBar: {},
//       homeSection: {
//         title: "Global Share Support Youth Association",
//         subtitle:
//           "We are a global youth organization that supports the youth of the world. We provide a free safe and secure tutoring environment for youth to learn, grow and develop their skills.",
//       },
//       aboutSection: {
//         title: "Aboute",
//         cards: [
//           {
//             title: "Bruh",
//             image:
//               "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/640px-NewTux.svg.png",
//           },
//           { title: "Bruh" },
//           { title: "Bruh" },
//           { title: "aoeue" },
//         ],
//       },
//       programsSection: {},
//       subjectsSection: {},
//       scheduleSection: {
//         activeDates: [{ date: new Date().toString(), time: "EUEU" }],
//       },
//       questionsSection: {},
//       teamSection: {},
//       contactSection: { contactInfo: {} },
//     },
//   }
// ).then(() => {});
