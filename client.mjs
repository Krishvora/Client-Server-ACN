import { PORT, INPUT } from "./config.mjs";
import fetch from "node-fetch";

async function sendString(url, string) {
  console.log("Request: ", string);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ string }),
  });
  return response.json();
}

sendString(`http://localhost:${PORT}/`, INPUT)
  .then((data) => {
    console.log("Response: ", data);
  })
  .catch((error) => console.error(error));
