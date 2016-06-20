const path = require("path");

//jslint
//jshint
//eslint
const LINTERS_NAME = {
  jslint : "jslint"
}
module.exports = run ;

function run(projectPath){
  const pjs = require(projectPath+"/package.json");

  return {}
}

function searchForDependency(dependencies, package){

  console.log(dependencies);
}