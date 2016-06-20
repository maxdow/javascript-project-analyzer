
const argv = require("minimist")(process.argv.slice(2));

const packagejson = require("./packagejson");

//
//
// input
// analyze path|
//

const sourcePath = "./";

//check for package.json

//check for linters

const analyze = {
  packagejson : packagejson(sourcePath),
  linters : {
   present : true,
   type: "eslint"
 }
} ;




printToConsole();

function printToConsole(){
  console.log(analyze);
}