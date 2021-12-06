import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";

const app = express();

mongoose.connect(
  "mongodb://dlxh:1988grz@ds159631.mlab.com:59631/dlxh",
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

app.listen(3005, () => console.log("UserList app listening on the port 3005!"));
