import { PORT, RESPONSE } from "./config.mjs";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  console.log("Request Received...");
  res.send(JSON.stringify(req.body.string + " " + RESPONSE));
  console.log("Response Sent...");
});

app.listen(PORT, function () {
  console.log("Server listening on PORT:", PORT);
});
