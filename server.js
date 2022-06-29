const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());
require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT;
const host = process.env.HOST;
console.log(port, host);
mongoose.connect(host, () =>
  console.log(`you are connected to ${host} server on port :${port}`)
);

app.use("/contacts", require("./routes/contacts"));
