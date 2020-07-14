const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { customAlphabet } = require("nanoid");

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create connection to DB
mongoose.connect("mongodb://user:password@pbid-shortener_db_1:27017/pbid", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => console.log("Connected to DB"));
connection.on("error", (err) => console.error("Error conecting:", err));

const Url = mongoose.model("Url", {
  short: String,
  original: String,
  created: Date,
});

app.get("/urls", async (req, res) =>
  res.json(await Url.find({}, null, { sort: { created: -1 } }))
);

app.post("/shorten", async ({ body }, res) => {
  async function generate() {
    const short = `https://pbid.io/${customAlphabet(
      "abcdefghijklmnopqrstuvwxyz0123456789",
      8
    )()}`;
    const found = await Url.find({ short }).findOne();
    if (!found) {
      return short;
    }
    await generate();
  }

  const url = new Url({
    original: body.url,
    short: await generate(),
    created: new Date(),
  });
  await url.save();

  return res.json(await Url.find({}, null, { sort: { created: 1 } }));
});

app.listen(port, () => console.log(`App listening at ${port}`));
