var http = require('http');
var director = require('director');

var cool = require('cool-ascii-faces');
var bot = require('./bot.js');

function ping() {
  this.res.writeHead(200);
  this.res.end(cool());
}

var router = new director.http.Router({
  '/' : {
    post: bot.respond
  }
});

var server = http.createServer(function (req, res) {
  req.chunks = [];
  req.on('data', function (chunk) {
    req.chunks.push(chunk.toString());
  });

  router.dispatch(req, res, function(err) {
    res.writeHead(err.status, {"Content-Type": "text/plain"});
    res.end(err.message);
  });
});


var port = Number(process.env.PORT || 5000);
server.listen(port);
console.log("Server running at http://127.0.0.1:" + port);