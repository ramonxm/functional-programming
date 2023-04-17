const fs = require("node:fs");
const path = require("node:path");

const { log, error } = console;

function readDir(filepath) {
  return new Promise((resolve, reject) => {
    try {
      const archives = fs.readdirSync(filepath);
      const mappedArchives = archives.map((archive) =>
        path.join(filepath, archive)
      );
      resolve(mappedArchives);
    } catch (error) {
      reject(error);
    }
  });
}

function elementsFinishedWith(array, pattern) {
  return array.filter((el) => el.endsWith(pattern));
}

const filepath = path.join(__dirname, "..", "legends");

readDir(filepath)
  .then((archives) => elementsFinishedWith(archives, ".srt"))
  .then(log)
  .catch(error);
