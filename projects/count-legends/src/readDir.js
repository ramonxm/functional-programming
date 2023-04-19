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

function elementsFinishedWith(pattern) {
  return (array) => array.filter((el) => el.endsWith(pattern));
}

function readArchive(archivePath) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(archivePath, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function readArchives(paths) {
  return Promise.all(paths.map(readArchive));
}

function removeEmptyLines(array) {
  return array.filter((el) => el.trim());
}

function removeWithInclude(pattern) {
  return (array) => array.filter((el) => !el.includes(pattern));
}

function removeIfHasNumbers(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

const filepath = path.join(__dirname, "..", "legends");

readDir(filepath)
  .then(elementsFinishedWith(".srt"))
  .then(readArchives)
  .then((contents) => contents.join("\n"))
  .then((allContents) => allContents.split("\n"))
  .then(removeEmptyLines)
  .then(removeWithInclude("-->"))
  .then(removeIfHasNumbers)
  .then(log)
  .catch(error);
