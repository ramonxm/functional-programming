const fs = require("node:fs");
const path = require("node:path");

function readDir(filepath) {
  const archives = fs.readdirSync(filepath);
  console.log(archives);
}

const filepath = path.join(__dirname, "..", "legends");

readDir(filepath);
