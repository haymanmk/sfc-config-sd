const express = require("express");
const bodyParser = require("body-parser");
const { writeFile } = require("fs/promises");
const axios = require("axios");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const fileName = "./LocationMap.json";
const destinationPath = "/etc/SFC";
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
    case "read":
      retrieveConfig()
        .then((data) => {
          replyMsg.status = "success";
          replyMsg.msg = data;
          res.status(200).send(replyMsg);
        })
        .catch((err) => {
          replyMsg.status = "failed";
          replyMsg.msg = err;
          res.status(500).send(replyMsg);
        });
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
    case "poweroff":
      powerOff();
      replyMsg.status = "success";
      res.status(200).send(replyMsg);
      break;
    default:
      break;
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is now listening on PORT: ${port}`);
});

/**
 * Retrieve Device Info. from SmartFactory
 *
 * @returns {Promise}  data/error
 */
function retrieveConfig() {
  const url =
    "http://shixpa-peproxy00.garmin.com/smt-sfcadvance/T3-3F/api/Configs";
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        resolve(data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

/**
 * Create an Config File
 *
 * @param {object} config - Configuration in object form
 * @returns {Promise} return error message if failed
 */
function createConfig(config) {
  return new Promise((resolve, reject) => {
    writeFile(fileName, JSON.stringify(config))
      .then(async () => {
        const copyFileError = await copyFile(fileName, destinationPath);
        if (copyFileError) {
          console.error(copyFileError);
          reject(copyFileError);
        }
        const setHostnameError = await setHostname(Object.keys(config)[0]);
        if (setHostnameError) {
          console.error(setHostnameError);
          reject(setHostnameError);
        }
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

function copyFile(fileName, destination) {
  return new Promise((resolve, reject) => {
    exec(`sudo cp ${fileName} ${destination}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        reject(error.message);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        reject(stderr);
        return;
      }
      console.log(`stdout: ${stdout}`);
      resolve();
    });
  });
}

function setHostname(hostname) {
  return new Promise((resolve, reject) => {
    exec(`sudo bash editHostname.sh ${hostname}`, (error, stdoutm, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        reject(error.message);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        reject(stderr);
        return;
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}

function powerOff() {
  exec("sudo poweroff", (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
