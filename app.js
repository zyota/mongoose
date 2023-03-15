import express from "express";
import nodemon from "nodemon";
import bodyParser from "body-parser";
import cors from "cors";
import mongooseConfig from "./config/mongoose-config.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(4000, () => {
  console.log("listening on 4000");
});
