const test = require("tape");
const path = require("path");
const packagejson = require("../../src/packagejson")

const pathToSampleProjectValide = path.resolve(__dirname,"../samples/valide/");

const valideResult = {
  present : true
}


test("Should return an object", function (t) {
  t.equal(typeof packagejson(),"object");
  t.end();
});

test("Should found the presence of package.json file", function (t) {
  t.equal(packagejson(pathToSampleProjectValide).present,valideResult.present);
  t.end();
});