
const argv = require("minimist")(process.argv.slice(2));

const packagejson = require("./packagejson");
const linters = require("./linters");
const path = require("path");
//
//
// input
// analyze path|
//
const sourcePath = path.resolve("./");

//check for package.json

//check for linters

const analyze = {
  packagejson : packagejson(sourcePath),
  linters : linters(sourcePath)
} ;




printToConsole();

function printToConsole(){
  console.log(analyze);
}