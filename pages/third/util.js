// util.js
var loginName = 'testLOGINNAME';
var loginNge = 10;
function logName() {
    console.log(loginName);
}
function logAge() {
    console.log(loginNge);
}
module.exports.logName = logName;
module.exports.logAge = logAge;