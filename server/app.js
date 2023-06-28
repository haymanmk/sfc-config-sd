const express = require("express");
const bodyParser = require("body-parser");
const { writeFile } = require("fs/promises");

const app = express();
app.use(bodyParser.json());

const fileName = "./LocationMap.json";
const initConfig = {
  hostname: "T5-SMT-SFC-034-U",
  offset: 0,
  cartID: "t5-sfc-017",
  brightness: 1,
  position: "Down",
  blinkCycle: 0.1,
  modifyUser: "16683",
  online: true,
  floor: "3F",
  invert: true,
  org: "T5",
  insertDatetime: "2020-04-21T16:25:41.593",
  modifyTime: "2020-04-21T08:25:41.037",
  numbers: 25,
};

app.route("/config").post((req, res, next) => {
  const body = req.body;
  console.log("POST request Received:", body);

  const replyMsg = {
    status: "success",
    msg: "",
  };

  const { cmd, msg } = body;
  if (cmd == null || msg == null) {
    let errorMsg = "";
    errorMsg += cmd == null ? "cmd " : "";
    errorMsg += msg == null ? "msg " : "";
    errorMsg += "not found in request body.";
    replyMsg.status = "failed";
    replyMsg.msg = errorMsg;
    console.error(errorMsg);
    res.status(400).send(replyMsg);
    return;
  }

  switch (cmd) {
    case "write":
      if (msg.hostname)
        createConfig({ [msg.hostname]: msg })
          .then(() => {
            replyMsg.status = "success";
            res.status(200).send(replyMsg);
          })
          .catch((err) => {
            const errorMsg = `Unknown error occurred: ${err}`;
            replyMsg.status = "failed";
            replyMsg.msg = errorMsg;
            console.error(errorMsg);
            res.status(500).send(replyMsg);
          });
      else {
        const errorMsg = "Can not find hostname in request msg.";
        replyMsg.status = "failed";
        replyMsg.msg = errorMsg;
        console.error(errorMsg);
        res.status(400).send(replyMsg);
      }
      break;
    default:
      break;
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is now listening on PORT: ${port}`);
});

function createConfig(config) {
  return new Promise((resolve, reject) => {
    writeFile(fileName, JSON.stringify(config))
      .then(() => {
        console.log("Succeed to create a file.");
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

// createConfig({ hostname: initConfig });
