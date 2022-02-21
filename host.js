var http = require('http');

http.createServer(function (req, res) {
  res.write("Dreamland Studios Bot is: Online!");
  res.end();
}).listen(8080);