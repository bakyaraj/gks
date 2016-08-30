var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(9000);
console.log("Server connected..!");
console.log("try http://localhost:9000");