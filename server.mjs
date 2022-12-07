import { PORT, RESPONSE } from "./config.mjs";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  console.log("Request Received...");
  const data = req.body.string + " " + RESPONSE;
  res.send(JSON.stringify(data));
  console.log("Response Sent...");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
