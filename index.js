const Fetch= require('./fetch.js')
const Ping= require('./ping.js')

//start http server
const http = require('http');
const port = 4000;
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write("Keep Alive! Don't die.");
  res.end();
}).listen(port);


//start fetch
Fetch()


//start ping
Ping()