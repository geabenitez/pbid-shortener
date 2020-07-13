const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { customAlphabet } = require("nanoid");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/urls", (req, res) =>
  res.json([
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
    {
      short: "https://pbid.io/f3x2ab1c",
      long:
        "https://www.udemy.com/course/understanding-typescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overviewtypescript/learn/lecture/16888200#overview",
      timestamp: "2020-07-01 14:23",
    },
  ])
);

app.post("/shorten", (req, res) => {
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 8);
  return res.json({ id: nanoid() });
});

app.listen(port, () => console.log(`App listening at ${port}`));
