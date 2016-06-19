// open file
// read content
const fsp = require("fs-promise");

function checkForFile(pathToFile){
  return true;
}

function openFile(file){
  return fsp.readFile(file, {encoding:'utf8'});
}

function readFile(file){
  return ""
}