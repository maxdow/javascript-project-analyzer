const fileExists = require("file-exists");
module.exports = run;

function isPackageJsonExist(projectRootPath){
  return fileExists(projectRootPath+"/package.json")
}

function run(projectPath){
  return {
    present : isPackageJsonExist(projectPath)
  }
}
